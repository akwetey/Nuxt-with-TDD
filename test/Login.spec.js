import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/static/Login.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Login, {
    data() {
      return {
        email: "",
        password: "",
        showDismissibleAlert: false
      };
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Login form", () => {
  test("calls login action", () => {
    const loginMock = jest.fn(() => Promise.resolve());
    const store = new Vuex.Store({
      actions: {
        auth: loginMock
      }
    });
    const wrapper = shallowMount(Login, { localVue, store });
    wrapper.find("button").trigger("click");
    expect(loginMock).toHaveBeenCalled();
  });

  test("set form data", async () => {
    const button = wrapper.find("button");
    button.trigger("click");
    wrapper.vm.login();
    await wrapper.setData({
      email: "admin@admin.com",
      password: "12345678",
      showDismissibleAlert: false
    });
    expect(wrapper.vm.email).toBe("admin@admin.com");
    expect(wrapper.vm.password).toBe("12345678");
    expect(wrapper.vm.showDismissibleAlert).toBe(false);
  });

  test("Form should render correctly", () => {
    const wrapper = shallowMount(Login, {
      stubs: {
        NuxtLink: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

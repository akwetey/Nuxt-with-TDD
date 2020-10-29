import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/static/Login.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

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

  test("Form should render correctly", () => {
    const wrapper = shallowMount(Login, {
      stubs: {
        NuxtLink: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

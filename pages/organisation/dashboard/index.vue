<template>
  <b-overlay :show="show" rounded="sm" :opacity="opacity">
    <b-container>
      <b-row>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Active Vs Suspended Branches
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                :height="450"
                :width="450"
                type="pie"
                :options="chartData.active_vrs_suspended_instances.chartOptions"
                :series="chartData.active_vrs_suspended_instances.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Monthly Visits
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                width="450"
                type="bar"
                :options="chartData.monthly_visits.chartOptions"
                :series="chartData.monthly_visits.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Monthly Guest Visits
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                width="450"
                type="bar"
                :options="chartData.monthly_guest_visits.chartOptions"
                :series="chartData.monthly_guest_visits.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Monthly Maintenance Visits
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                width="450"
                type="bar"
                :options="chartData.monthly_maintenance_visits.chartOptions"
                :series="chartData.monthly_maintenance_visits.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Monthly Delivery Visits
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                width="450"
                type="bar"
                :options="chartData.monthly_delivery_visits.chartOptions"
                :series="chartData.monthly_delivery_visits.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-1">
          <h6 class="text-center mb-2 font-weight-bold size">
            Monthly Programs Visits
          </h6>
          <div>
            <ClientOnly>
              <apexchart
                width="450"
                type="bar"
                :options="chartData.monthly_program_visits.chartOptions"
                :series="chartData.monthly_program_visits.series"
              ></apexchart>
            </ClientOnly>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      opacity: 1,
      chartData: {
        active_vrs_suspended_instances: {
          series: [],
          chartOptions: {}
        },
        monthly_visits: {
          series: [],
          chartOptions: {}
        },
        monthly_guest_visits: {
          series: [],
          chartOptions: {}
        },
        monthly_maintenance_visits: {
          series: [],
          chartOptions: {}
        },
        monthly_delivery_visits: {
          series: [],
          chartOptions: {}
        },
        monthly_program_visits: {
          series: [],
          chartOptions: {}
        }
      }
    };
  },
  layout: "dashboard",
  async fetch() {
    try {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaXNzIjoiaHR0cDpcL1wvZnVuZGl0cmFjay5jb20iLCJleHAiOjE2MDQ0MzExMjUsInRfbWFzayI6ImYwOGIzMDE4ZjEwOWIyZjUyOGQwMDAyNTEwZGRhNzAzIiwib3JnYW5pc2F0aW9uIjoiUm9tIn0.Z7yiqfoDq8pl8QqNv-qfLOOuhXGQA_ZW57mhxuVeCY4";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      let response = await this.$axios.get(
        "http://funditrack.com/api/organisation/report",
        {
          headers
        }
      );
      this.show = false;
      const res = response.data;
      const data = Object.entries(res.active_vrs_suspended_instances);
      const series = [];
      const labels = [];
      data.forEach(([key, value]) => {
        series.push(value);
        labels.push(key.toUpperCase());
      });
      this.chartData.active_vrs_suspended_instances = {
        series: series,
        chartOptions: {
          labels: labels,
          legend: {
            position: "left"
          }
        }
      };

      //monthly visits
      {
        const monthlyVisits = res.monthly_visits;
        const series = [{ name: "Monthly Visits", data: [] }];
        const categories = [];
        monthlyVisits.forEach(data => {
          series[0].data.push(data.total_count);
          categories.push(data.month);
        });

        this.chartData.monthly_visits = {
          series: series,
          chartOptions: {
            chart: {
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: categories
            }
            // yaxis: {
            //   labels: {
            //     /**
            //      * Allows users to apply a custom formatter function to yaxis labels.
            //      *
            //      * @param { String } value - The generated value of the y-axis tick
            //      * @param { index } index of the tick / currently executing iteration in yaxis labels array
            //      */
            //     formatter: function(val, index) {
            //       return val.toFixed(0);
            //     }
            //   }
            // }
          }
        };
      }
      //monthly guest visits
      {
        const monthlyGuestVisits = res.monthly_guest_visits;
        const series = [{ name: "Monthly Guest Visits", data: [] }];
        const categories = [];
        monthlyGuestVisits.forEach(data => {
          series[0].data.push(data.total_count);
          categories.push(data.month);
        });

        this.chartData.monthly_guest_visits = {
          series: series,
          chartOptions: {
            chart: {
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: categories
            }
            // yaxis: {
            //   labels: {
            //     /**
            //      * Allows users to apply a custom formatter function to yaxis labels.
            //      *
            //      * @param { String } value - The generated value of the y-axis tick
            //      * @param { index } index of the tick / currently executing iteration in yaxis labels array
            //      */
            //     formatter: function(val, index) {
            //       return val.toFixed(0);
            //     }
            //   }
            // }
          }
        };
      }
      //monthly maintenance visits
      {
        const monthlyMaintenanceVisits = res.monthly_maintenance_visits;
        const series = [{ name: "Monthly Maintenance Visits", data: [] }];
        const categories = [];
        monthlyMaintenanceVisits.forEach(data => {
          series[0].data.push(data.total_count);
          categories.push(data.month);
        });

        this.chartData.monthly_maintenance_visits = {
          series: series,
          chartOptions: {
            chart: {
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: categories
            }
            // yaxis: {
            //   labels: {
            //     /**
            //      * Allows users to apply a custom formatter function to yaxis labels.
            //      *
            //      * @param { String } value - The generated value of the y-axis tick
            //      * @param { index } index of the tick / currently executing iteration in yaxis labels array
            //      */
            //     formatter: function(val, index) {
            //       return val.toFixed(0);
            //     }
            //   }
            // }
          }
        };
      }
      // monthly delivery visits
      {
        const monthlyDeliveryVisits = res.monthly_delivery_visits;
        const series = [{ name: "Monthly Delivery Visits", data: [] }];
        const categories = [];
        monthlyDeliveryVisits.forEach(data => {
          series[0].data.push(data.total_count);
          categories.push(data.month);
        });

        this.chartData.monthly_delivery_visits = {
          series: series,
          chartOptions: {
            chart: {
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: categories
            }
            // yaxis: {
            //   labels: {
            //     /**
            //      * Allows users to apply a custom formatter function to yaxis labels.
            //      *
            //      * @param { String } value - The generated value of the y-axis tick
            //      * @param { index } index of the tick / currently executing iteration in yaxis labels array
            //      */
            //     formatter: function(val, index) {
            //       return val.toFixed(0);
            //     }
            //   }
            // }
          }
        };
      }
      {
        const monthlyProgramsVisits = res.monthly_program_visits;
        const series = [{ name: "Monthly Programs Visits", data: [] }];
        const categories = [];
        monthlyProgramsVisits.forEach(data => {
          series[0].data.push(data.total_count);
          categories.push(data.month);
        });

        this.chartData.monthly_program_visits = {
          series: series,
          chartOptions: {
            chart: {
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: categories
            }
            // yaxis: {
            //   labels: {
            //     /**
            //      * Allows users to apply a custom formatter function to yaxis labels.
            //      *
            //      * @param { String } value - The generated value of the y-axis tick
            //      * @param { index } index of the tick / currently executing iteration in yaxis labels array
            //      */
            //     formatter: function(val, index) {
            //       return val.toFixed(0);
            //     }
            //   }
            // }
          }
        };
      }
    } catch (error) {
      console.log(error);
      this.show = false;
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }
};
</script>

<style scoped>
.size {
  font-size: 0.75rem;
}
</style>

<template>
  <v-container class="mt-7">
    <!--btnScroll-->

    <float />
    <v-card>
      <v-card-text>
        <v-tabs show-arrows v-model="tab" fixed-tabs>
          <!-- step #1 -->
          <v-tab-item>
            <v-card outlined>
              <v-card-text>
                <v-form
                  v-model="valid"
                  class="pa-5 mx-auto"
                  style="max-width: 35rem"
                >
                  <v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">Reason for partnering with GSIF</p>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="orgname"
                          outlined
                          required
                          @change="sameasabove1"
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">
                          What are the key challenges you are facing with the
                          current MIS process
                        </p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="legname"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">
                          Why is transforming MIS important for your program
                        </p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="legname"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">
                          How will this project have an impact on end
                          beneficiaries
                        </p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="legname"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">
                          No of MIS resources in the organisation (mention full
                          time, part time, shared)
                        </p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="legname"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <p class="label">
                          No of different Programs, Projects run by the
                          Organisation
                        </p>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-textarea
                          rows="3"
                          no-resize
                          counter="300"
                          dense
                          hide-details="auto"
                          v-model="legname"
                          outlined
                        />
                      </v-col>
                    </v-row>
                    <v-col cols="12" class="pa-0">
                      <v-row class="my-2">
                        <p class="mb-6 mx-4 text-black-800 text-opacity-100 t">
                          Please provide the details of the program or
                          intervention or project where MIS restructuring is
                          needed. <br />
                          Since this is a short term engagement we can take up
                          to 1 core program
                        </p>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Program/Project Name</p>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="orgname"
                            outlined
                            value="project 1"
                            required
                            @change="sameasabove1"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Program/Project Budget</p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Program/Project Start and End Date
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Overview of the program</p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Key Impact indicators of the program/Project
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">End Beneficiary</p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-row align="left" class="my-2 ml-2 mr-1" justify="left">
                        <p class="mb-6 mx-1 text-black-800 text-opacity-100 t">
                          Program total beneficary impact details
                        </p>
                      </v-row>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Impact indicator-1</th>
                              <th class="text-left">Past- 2018-19</th>
                              <th class="text-left">Past- 2019"10</th>
                              <th class="text-left">CY 2020-21(provisional)</th>
                              <th class="text-left">Projected- 2021-22</th>
                              <th class="text-left">Projected- 2022-23</th>
                              <th class="text-left">Projected- 2023-24</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-row align="left" class="my-2 ml-2 mr-1" justify="left">
                        <p class="mb-6 mx-1 text-black-800 t">
                          Explain the MIS process(as per questions in table
                          below)
                        </p>
                      </v-row>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Category</th>
                              <th class="text-left">How (Manual or tool)</th>
                              <th class="text-left">Who collects</th>
                              <th class="text-left">Frequency</th>
                              <th class="text-left">Type of data collected</th>
                              <th class="text-left">
                                Challenges (Languages, internet)
                              </th>
                              <th class="text-left">Time taken</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in details3" :key="item.name">
                              <td>{{ item.name }}</td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                              <td>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  no-resize
                                  outlined
                                  rows="1"
                                  row-height="10"
                                ></v-textarea>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                      <v-row justify="center" class="my-2">
                        <v-btn
                          class="primary"
                          @click="details3.push({ name: 'new category' })"
                          dark
                          rounded
                        >
                          <v-icon left> mdi-plus </v-icon>
                          Add New Row
                        </v-btn>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            What is the support you need from GSIF for MIS
                            re-engineering
                          </p>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="orgname"
                            outlined
                            value="project 1"
                            required
                            @change="sameasabove1"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            What is your automation requirement for excel based
                            solutions, if any
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            What are the success indicators of GSIF project
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Mention the key risks for achieving the planned
                            outcomes and impacts of the GSIF project and how do
                            these factors affect the project
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            What are the things that can be done/ planned to
                            minimize or mitigate the impact of above-mentioned
                            risk factors
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            How do you plan to sustain the MIS solution designed
                            by GSIF (licence
                            cost,maintenance,enhancement,resources,etc)
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-textarea
                            rows="3"
                            no-resize
                            counter="300"
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-form>
                <v-row justify="center" class="ml-2">
                  <div class="d-flex">
                    <div class="d-inline-flex flex-wrap ma-3">
                      <div class="d-flex mt-5 mr-3">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          to="/organization-info?s=2"
                        >
                          <v-icon left>mdi-arrow-left</v-icon>
                          Organization Information
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5 mr-3">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          class="wall"
                          @click="tab--"
                        >
                          Save And Exit
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5 mr-3">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          class="wall"
                          @click="tab++"
                        >
                          Save And Continue<v-icon right
                            >mdi-arrow-right</v-icon
                          >
                        </v-btn>
                      </div>
                      <div class="d-flex mt-5">
                        <v-btn
                          large
                          rounded
                          color="primary"
                          to="/nominated-personal?s=1"
                        >
                          Nominated Personal
                          <v-icon right>mdi-arrow-right</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Float from "../components/Float.vue";
export default {
  components: { Float },
  name: "engagement-info",
  data() {
    return {
      projectname: "project 1",
      tab: 0,
      details: [
        {
          name: "Reason for partnering with GSIF",
        },
        {
          name: "What are the key challenges you are facing with the current MIS process",
        },
        {
          name: "Why is transforming MIS important for your program",
        },
        {
          name: "How will this project have an impact on end beneficiaries",
        },
        {
          name: "No of MIS resources in the organisation (mention full time, part time, shared)",
        },
        {
          name: "No of different Programs, Projects run by the Organisation",
        },
      ],
      details2: [
        {
          name: "Program/Project Name",
        },
        {
          name: "Program/Project Budget",
        },
        {
          name: "Program/Project Start and End Date",
        },
        {
          name: "Overview of the program",
        },
        {
          name: "Key Impact indicators of the program/Project",
        },
        {
          name: "End Beneficiary",
        },
      ],
      details3: [
        {
          name: "Dato Collection",
        },
        {
          name: "Data consolidation",
        },
        {
          name: "Data Quality, governance,and security",
        },
        {
          name: "Data Reporting / Dashboard creation",
        },
        {
          name: "Generating insights from the report",
        },
      ],
      details4: [
        {
          name: "What is the support you need from for MIS re-engineering",
        },
        {
          name: "What is your automation requirement for excel based solution,if any",
        },
        {
          name: "WHat are the success indicators of projects",
        },
        {
          name: "Mention the key risks for achieving the planned outcomes and impacts of te project and how do these factors affect the project",
        },
        {
          name: "What are the things that can be done/ planned to minimize or mitigate the impact of above-mentioned risk factors ",
        },
        {
          name: "How do you plan to sustain the MIS solution designed by (licence cost, maintenance, enhancement, resources, etc)",
        },
      ],
      details5: [
        {
          name: "What is the support you need from GSIF for MIS re-engineering",
        },
        {
          name: "What is your automation requirement for excel based solutions, if any",
        },
        {
          name: "What are the success indicators of GSIF project",
        },
        {
          name: "Mention the key risks for achieving the planned outcomes and impacts of the GSIF project and how do these factors affect the project",
        },
        {
          name: "What are the things that can be done/ planned to minimize or mitigate the impact of above-mentioned risk factors",
        },
        {
          name: "How do you plan to sustain the MIS solution designed by GSIF (licence cost,maintenance,enhancement,resources,etc)",
        },
      ],
    };
  },
  watch: {
    "$route.query.s": function (v) {
      this.tab = +v - 1;
    },
    tab(v) {
      this.$router.push({
        query: {
          s: +v + 1,
        },
      });
    },
  },
  mounted() {
    this.$route.query.s
      ? (this.tab = +this.$route.query.s - 1)
      : (this.tab = 0);
  },
};
</script>

<style lang="scss" scoped>
.t {
  color: black;
}
</style>

<template>
  <v-container class="mt-7">
    <float />
    <v-card>
      <v-card-text>
        <v-tabs show-arrows v-model="tab">
          <v-tab>Nominated Personal details</v-tab>

          <!--Step #3-->
          <v-tab-item>
            <v-card outlined>
              <v-card-text>
                <v-row justify="center">
                <v-form>
                 <v-row align="center">
                      <v-col cols="12" md="4">
                        <p class="label">Name</p>
                      </v-col>
                      <v-col cols="12" md="2">
                        <v-text-field
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

                      <v-col cols="12" md="4">
                        <p class="label">E-mail</p>
                      </v-col>

                      <v-col cols="12" md="2" class="d-flex flex-wrap">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="orgname"
                          outlined
                          required
                          @change="sameasabove1"
                        />
                      </v-col>
                    </v-row>
                    <v-row align="center"
                      ><v-col cols="12" md="4">
                        <p class="label">
                          Mobile
                        </p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Education Qualification</p></v-col
                      >
                      <v-col cols="12" md="2" class="d-flex flex-wrap">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Total Work Experience</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Vintage in Organisation</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Has Understanding of MIS</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Has good communication skills</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                      <v-col cols="12" md="4">
                        <p class="label">Has familiarity with tachnology esp. MS office,zoom,etc</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
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
                       
                      <v-col cols="12" md="4">
                        <p class="label">Has the ability to deal with stakeholder, get approval/take decision and influence others in the organisation to adopt the project improvements</p></v-col
                      >
                      <v-col cols="12" md="2">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="orgname"
                          outlined
                          required
                          @change="sameasabove1"
                        />
                      </v-col>
                    </v-row>
                    </v-form></v-row>
                <!--
                <v-form v-model="valid">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody>
                            <template v-for="item in details5">
                              <tr
                                :key="item.name"
                                v-if="$vuetify.breakpoint.mdAndUp"
                              >
                                <td>{{ item.name }}</td>
                                <td>
                                  <v-textarea
                                    hide-details="auto"
                                    filled
                                    dense
                                    auto-grow
                                    outlined
                                    rows="2"
                                    row-height="20"
                                  ></v-textarea>
                                </td>
                              </tr>
                              <tr v-else :key="item.name">
                                <div class="mt-4">
                                  {{ item.name }}
                                </div>
                                <v-textarea
                                  hide-details="auto"
                                  filled
                                  dense
                                  auto-grow
                                  outlined
                                  rows="2"
                                  row-height="20"
                                ></v-textarea>
                              </tr>
                            </template>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-form>-->
                <v-row align="center" justify="center">
                  <div class="d-flex">
                    <div class="d-inline-flex flex-wrap ma-3">
                      <div class="d-flex mt-5 mr-3">
                        <v-btn large rounded color="primary" to="engagement-info?s=1">
                          <v-icon left>mdi-arrow-left</v-icon>
                          Back
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
                        <v-btn large rounded color="primary" to="/agreement?s=1">
                          Agreement
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
  data() {
    return {
      tab: 0,
      radioGroup: 1,
      radioGroup2: 1,
      radioGroup3: 1,
      radioGroup4: 1,
      items: ["Section 8 or 25 Company", "Trust", "Society"],
      itemsDomain: [
        "Education",
        "Women's empowerment",
        "Skilling",
        "Livelihood",
        "Health",
        "Others",
      ],
      itemsAcc: [
        "NGO Darpan",
        "Guidestar",
        "Charity Aid Foundation",
        "Others",
        "None",
      ],
      itemsSc: ["High", "Medium", "Low"],
      details5: [
        {
          name: "Name",
        },
        {
          name: "E-mail",
        },
        {
          name: "Mobile",
        },
        {
          name: "Educational Qualification",
        },
        {
          name: "Total Work Experience",
        },
        {
          name: "Vintage in Organisation",
        },
        {
          name: "Has Understanding of MIS",
        },
        {
          name: "Has good communication skills",
        },
        {
          name: "Has familiarity with tachnology esp. MS office,zoom,etc",
        },
        {
          name: "Has the ability to deal with stakeholder, get approval/take decision and influence others in the organisation to adopt the project improvements",
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

<style lang="scss" scoped></style>

<template>
  <div>
    <v-container class="mt-7">
      <float />
      <v-card>
        <v-card-text>
          <v-tabs show-arrows v-model="tab" fixed-tabs>
            <v-tab>Questionnaire</v-tab>
            <div class="dash"></div>
            <v-tab>Related Info</v-tab>

            <!-- step #1 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Name of the Organization"
                          required
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="Legal Name"
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="email"
                          outlined
                          label="Year of Establishment"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Regd Adress with state and pin code"
                          required
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="HO Address"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Website"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-select
                          dense
                          :items="items"
                          outlined
                          transition="scroll-y-transition"
                          append-icon="mdi-chevron-down"
                          label="Registered Legal Entity"
                          hide-details="auto"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="PAN Number"
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="email"
                          outlined
                          label="Registration Certificate Number"
                          required
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                          <div class="d-flex mt-5 mr-3">
                        <v-btn large rounded color="primary" to="/organization-infod?s=6">
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
                          <v-btn large rounded color="primary" to="/signd?s=1">
                            Digital Signature
                            <v-icon right>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <!-- step #2 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Name of the Organization"
                          required
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="Legal Name"
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="email"
                          outlined
                          label="Year of Establishment"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Regd Adress with state and pin code"
                          required
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="HO Address"
                        />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="firstname"
                          outlined
                          label="Website"
                          required
                        />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-select
                          dense
                          :items="items"
                          outlined
                          transition="scroll-y-transition"
                          append-icon="mdi-chevron-down"
                          label="Registered Legal Entity"
                          hide-details="auto"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="lastname"
                          outlined
                          label="PAN Number"
                        />
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          dense
                          hide-details="auto"
                          v-model="email"
                          outlined
                          label="Registration Certificate Number"
                          required
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                          <div class="d-flex mt-5 mr-3">
                        <v-btn large rounded color="primary" to="/organization-infod?s=6">
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
                          <v-btn large rounded color="primary" to="/signd?s=1">
                            Digital Signature
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
  </div>
</template>

<script>
import Float from '../components/Float.vue';
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
      details: [
        {
          name: "Income",
        },
        {
          name: "Expenditure",
        },
      ],
      details2: [
        {
          name: "Committed funding",
        },
        {
          name: "Expected funding",
        },
      ],
      details3: [
        {
          name: "Type of donors (CSR, international grant,HN1)",
        },
        {
          name: "Please provide names of significant donors",
        },
      ],
      details4: [
        {
          name: "Education-Number of students",
        },
        {
          name: "Livelihood Development - Number of patients",
        },
        {
          name: "Health-Number of patients",
        },
        {
          name: "Skilling and employability - Number of youth",
        },
        {
          name: "Others - Number of beneficiaries",
        },
      ],
      details5: [
        {
          name: "Senior Management",
        },
        {
          name: "Middle Management",
        },
        {
          name: "Field team",
        },
        {
          name: "Support Staff (Admin,IT,Finance,HR)",
        },
        {
          name: "Total",
        },
      ],
      details6: [
        {
          name: "Program Delivery (Covid, geographical terrain,etc)",
        },
        {
          name: "Funding (Regulatory, FCRA, etc)",
        },
        {
          name: "Others",
        },
      ],
      details7: [
        {
          name: "Computers/Laptop/Tablets/Mobile devices",
        },
        {
          name: "Internet",
        },
        {
          name: "Organization email domain (eg. xyz@ngodomain.com; xyz@gmail.com)",
        },
        {
          name: "Online video call tools used",
        },
        {
          name: "Accounting Software",
        },
        {
          name: "ERP",
        },
        {
          name: "Project Mangement Tools",
        },
        {
          name: "HR Software",
        },
        {
          name: "Data Collection Tools",
        },
        {
          name: "Data Reporting Tools/Software",
        },
        {
          name: "Donor Reporting Tools",
        },
        {
          name: "Others",
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

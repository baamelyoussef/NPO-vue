<template>
  <div>
    <v-container class="mt-7">
      <float />
      <v-card>
        <v-card-text>
          <v-tabs show-arrows v-model="tab" fixed-tabs>
            <v-tab>Signature Form</v-tab>

            <!-- step #1 -->
            <v-tab-item>
              <v-card outlined>
                <v-card-text>
                  <v-form v-model="valid">
                    <v-row align="center" justify="center" class="pa-5">
                      <h3 class="pr-2 mb-3">Digital Signature</h3>
                      <v-text-field
                        outlined
                        dense
                        placeholder="Name"
                        class="mx-2"
                        >  </v-text-field>
                        <v-text-field
                        outlined
                        dense
                        placeholder="Designation"
                        class="mx-2">  </v-text-field>
                        <v-text-field
                        outlined
                        placeholder="Date"
                        dense
                        class="mx-2">  </v-text-field>
                    </v-row>
                    <v-card outlined class="d-block d-md-flex justify-center overflow-x-hidden">
                      <vueSignature
                        ref="signature"
                        :sigOption="option"
                        :w="'800px'"
                        :h="'400px'"
                        :disabled="disabled"
                        :defaultUrl="dataUrl"
                      ></vueSignature>
                    </v-card>
                  </v-form>
                  <v-row align="center" justify="center">
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                        <div class="d-flex mt-5 mr-3">
                          <v-btn
                            large
                            rounded
                            color="primary"
                            to="/agreement?s=1"
                          >
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
                            @click="clear"
                          >
                            Clear
                            <v-icon right>mdi-file-outline</v-icon>
                          </v-btn>
                        </div>
                        <div class="d-flex mt-5 mr-3">
                          <v-btn
                            large
                            rounded
                            color="primary"
                            class="wall"
                            @click="clear"
                          >
                            Save
                            <v-icon right>mdi-content-save</v-icon>
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
                        <div class="d-flex mt-5">
                          <v-btn large rounded color="primary" to="/sign?s=1">
                            Submit
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
import Float from "../components/Float.vue";
import vueSignature from "vue-signature";

export default {
  components: {
    Float,
    vueSignature,
  },
  data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)",
      },
      disabled: false,
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
  methods: {
    save() {
      var _this = this;
      var png = _this.$refs.signature.save();
      var jpeg = _this.$refs.signature.save("image/jpeg");
      var svg = _this.$refs.signature.save("image/svg+xml");
      console.log(png);
      console.log(jpeg);
      console.log(svg);
    },
    clear() {
      var _this = this;
      _this.$refs.signature.clear();
    },
    undo() {
      var _this = this;
      _this.$refs.signature.undo();
    },
    addWaterMark() {
      var _this = this;
      _this.$refs.signature.addWaterMark({
        text: "mark text", // watermark text, > default ''
        font: "20px Arial", // mark font, > default '20px sans-serif'
        style: "all", // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill
        fillStyle: "red", // fillcolor, > default '#333'
        strokeStyle: "blue", // strokecolor, > default '#333'
        x: 100, // fill positionX, > default 20
        y: 200, // fill positionY, > default 20
        sx: 100, // stroke positionX, > default 40
        sy: 200, // stroke positionY, > default 40
      });
    },
    fromDataURL(url) {
      var _this = this;
      _this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
    },
    handleDisabled() {
      var _this = this;
      _this.disabled = !_this.disabled;
    },
  },
};
</script>

<style lang="scss" scoped></style>

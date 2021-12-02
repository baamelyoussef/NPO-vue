<template>
  <div>
    <v-container class="mt-7">
      <float />
      <v-card>
        <v-card-text>
          <v-tabs show-arrows v-model="tab" fixed-tabs>
            <v-tab>Page 1</v-tab>
            <div class="dash"></div>
            <v-tab>Page 2</v-tab>

            <!-- step #1 -->
            <v-tab-item dense>
              <v-card outlined>
                <v-card-text>
                  <v-row class="mx-1 d-flex align-center">
                    <v-form
                      v-model="valid"
                      class="mx-auto"
                      style="max-width: 35rem"
                    >
                      <v-row class="mt-5">
                        <v-col cols="12" md="6">
                          <p class="label">Name of the Organization</p>
                        </v-col>
                        <v-col cols="12" md="6">
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
                        <v-col cols="12" md="6">
                          <p class="label">Legal Name</p>
                        </v-col>

                        <v-col cols="12" md="6" class="d-flex flex-wrap">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="legname"
                            outlined
                            :disabled="lock"
                          />

                          <v-checkbox
                            label="Same As Above"
                            color="primary"
                            value="Yes"
                            v-model="radiok"
                            class="ma-2"
                            v-on:click="radiokclick"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Regd Adress with state and pin code
                          </p>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-textarea
                            dense
                            hide-details="auto"
                            v-model="ename"
                            outlined
                            rows="3"
                            @change="sameasabove2"
                            no-resize
                            counter="300"
                            required
                          />
                        </v-col>
                        <!---->

                        <!---->
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">HO Address</p></v-col
                        >
                        <v-col cols="12" md="6" class="d-flex flex-wrap">
                          <v-textarea
                            dense
                            hide-details="auto"
                            v-model="pname"
                            :disabled="lock2"
                            outlined
                            rows="3"
                            no-resize
                            counter="300"
                            required
                          />
                          <v-checkbox
                            label="Same As Above"
                            color="primary"
                            v-model="radiod"
                            value="Yes"
                            v-on:click="radiokclick2"
                            class="ma-2"
                          ></v-checkbox>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Website</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="firstname"
                            outlined
                            required
                          />
                        </v-col>
                      </v-row>
                      <v-row
                        ><v-col cols="12" md="6">
                          <p class="label">Registered Legal Entity</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-select
                            multiple
                            dense
                            :items="items"
                            outlined
                            transition="scroll-y-transition"
                            append-icon="mdi-chevron-down"
                            hide-details="auto"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">PAN Number</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="lastname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Registration Certificate Number
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="email"
                            outlined
                            required
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">80G Number</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="firstname"
                            outlined
                            required
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">12A Number</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="lastname"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            FCRA Number (if applicable)
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-text-field
                            dense
                            hide-details="auto"
                            v-model="email"
                            outlined
                            required
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Renewed 80G,12A,FCRA per the new guidelines?
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-radio-group v-model="radioGroup" row>
                            <v-radio
                              label="Yes"
                              color="primary"
                              value="Yes"
                            ></v-radio>
                            <v-radio
                              label="No"
                              color="primary"
                              value="No"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Availability of Audited Financial statements for
                            previous 3 years?
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-radio-group v-model="radioGroup2" row>
                            <v-radio
                              label="Yes"
                              color="primary"
                              value="Yes"
                            ></v-radio>
                            <v-radio
                              label="No"
                              color="primary"
                              value="No"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Compliant with Income Tax Return filing for previous
                            3 years?
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-radio-group v-model="radioGroup3" row>
                            <v-radio
                              label="Yes"
                              color="primary"
                              value="Yes"
                            ></v-radio>
                            <v-radio
                              label="No"
                              color="primary"
                              value="No"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Select the domain</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-select
                            multiple
                            dense
                            :items="itemsDomain"
                            outlined
                            transition="scroll-y-transition"
                            append-icon="mdi-chevron-down"
                            hide-details="auto"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Organization Accredited by</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-select
                            multiple
                            dense
                            :items="itemsAcc"
                            outlined
                            transition="scroll-y-transition"
                            append-icon="mdi-chevron-down"
                            hide-details="auto"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Any litigation history against the organization ? If
                            yes, please provide details
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-radio-group v-model="radioGroup4" row>
                            <v-radio
                              label="Yes"
                              color="primary"
                              value="Yes"
                            ></v-radio>
                            <v-radio
                              label="No"
                              color="primary"
                              value="No"
                            ></v-radio>
                          </v-radio-group>
                          4
                          <v-textarea
                            v-if="radioGroup4 === 'Yes'"
                            label="Details here"
                            auto-grow
                            outlined
                            rows="3"
                            row-height="25"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row class="d-none d-md-flex pt-4">
                        <v-col cols="4" md="">
                          <p class="label">
                            Details of NPO Person filling the form :
                          </p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <p class="mb-2 secondary--text ml-10 d-md-none">
                            Details of NPO Person filling the form :
                          </p>
                          <v-text-field
                            class="mx-2"
                            label="Name"
                            outlined
                            dense
                            prepend-icon="mdi-account-details"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Designation"
                            outlined
                            dense
                            prepend-icon="mdi-information-outline"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="E-mail"
                            outlined
                            dense
                            prepend-icon="mdi-email"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Mobile"
                            outlined
                            dense
                            prepend-icon="mdi-cellphone"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Details of NPO Champion :</p>
                        </v-col>

                        <v-col cols="12" md="6">
                          <p class="mb-2 secondary--text ml-10 d-md-none">
                            Details of NPO Champion :
                          </p>
                          <v-text-field
                            class="mx-2"
                            label="Name"
                            outlined
                            dense
                            prepend-icon="mdi-account-details"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Designation"
                            outlined
                            dense
                            prepend-icon="mdi-information-outline"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="E-mail"
                            outlined
                            dense
                            prepend-icon="mdi-email"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Mobile"
                            outlined
                            dense
                            prepend-icon="mdi-cellphone"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="">
                          <p class="label">Details of NPO CEO/ED/Founder</p>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            class="mx-2"
                            label="Name"
                            outlined
                            dense
                            prepend-icon="mdi-account-details"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Designation"
                            outlined
                            dense
                            prepend-icon="mdi-information-outline"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="E-mail"
                            outlined
                            dense
                            prepend-icon="mdi-email"
                          ></v-text-field>
                          <v-text-field
                            class="mx-2"
                            label="Mobile"
                            outlined
                            dense
                            prepend-icon="mdi-cellphone"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-row>
                  <v-row>
                    <div class="d-flex mt-2 mb-3">
                      <div class="d-inline-flex flex-wrap ma-3">
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
                          <v-btn large rounded color="primary" @click="tab++">
                            next
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
                  <v-row>
                    <v-form
                      v-model="valid"
                      class="mx-auto pa-3"
                      :style="
                        $vuetify.breakpoint.mdAndUp
                          ? 'max-width: 35rem'
                          : 'width: 100%'
                      "
                    >
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Explain organization's origin,purpose and core
                            activities. What is the social problem you are
                            addressing
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-textarea
                            no-resize
                            counter="300"
                            outlined
                            rows="3"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            Who are the direct and indirect beneficiaries of the
                            organisation
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-textarea
                            no-resize
                            counter="300"
                            outlined
                            rows="3"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">
                            What are the key qualitative impact indicators
                            measured
                          </p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-textarea
                            no-resize
                            counter="300"
                            outlined
                            rows="3"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" md="6">
                          <p class="label">Mention the SDG's impacted</p></v-col
                        >
                        <v-col cols="12" md="6">
                          <v-textarea
                            no-resize
                            counter="300"
                            outlined
                            rows="3"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black- t">
                              Please provide supporting documents with the form
                              Organisational Funding details in Crors (Past and
                              Projected)
                            </p>
                          </v-row>

                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left"></th>
                                  <th class="text-left">{{ year - 2 }}</th>
                                  <th class="text-left">{{ year - 1 }}</th>
                                  <th class="text-left">
                                    {{ year }}
                                  </th>
                                  <th class="text-left">{{ year + 1 }}</th>
                                  <th class="text-left">{{ year + 2 }}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Please provide Committed and expected funding
                              details in croces
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left"></th>
                                  <th class="text-left">Projected-1 2021-22</th>
                                  <th class="text-left">Projected-2022-23</th>
                                  <th class="text-left">Projected-2023-24</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details2" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      label=""
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Please provide Committed and expected funding
                              details in croces
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr></tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details3" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Organisational Impact/ End beneficiary
                              quantitative details (Past and Projected)
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left"></th>
                                  <th class="text-left">{{ year - 2 }}</th>
                                  <th class="text-left">{{ year - 1 }}</th>
                                  <th class="text-left">
                                    {{ year }}
                                  </th>
                                  <th class="text-left">{{ year + 1 }}</th>
                                  <th class="text-left">{{ year + 2 }}</th>
                                  <th class="text-left">{{ year + 3 }}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details4" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>

                        <!-- <v-row  class="my-2">
                          <v-btn  class="primary" @click="details69.push({ name:'nahenahe'})"
                                dark
                                rounded>
                            <v-icon left> mdi-plus </v-icon>
                            Add New Row
                        </v-btn>
                        </v-row> -->
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Provide names of states in wich you have project
                              offices in India
                            </p>
                          </v-row>
                          <div class="d-flex">
                            <v-spacer />
                            <v-btn
                              class="primary"
                              @click="details69.push({ name: 'nahenahe' })"
                              dark
                              rounded
                            >
                              <v-icon left> mdi-plus </v-icon>
                              Add New Row
                            </v-btn>
                          </div>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">City/District</th>
                                  <th class="text-left">State</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details69" :key="item.name">
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      outlined
                                      dense
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 ml-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Organisational employee details (as of last month
                              or Qtr)
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">Level</th>
                                  <th class="text-left">Full time employees</th>
                                  <th class="text-left">
                                    Part-time/Volunteers/etc
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details5" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      dense
                                      outlined
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      dense
                                      outlined
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Organisational Risk Details
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">Category</th>
                                  <th class="text-left">Scale</th>
                                  <th class="text-left">Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details6" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-select
                                      dense
                                      :items="itemsSc"
                                      outlined
                                      transition="scroll-y-transition"
                                      label="Choose Scale"
                                      hide-details="auto"
                                    ></v-select>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      dense
                                      outlined
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-row class="my-2 mr-1">
                            <p class="mb-6 mx-2 text-black t">
                              Organisational IT infrastructure availability
                              details
                            </p>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">Category</th>
                                  <th class="text-left">At Office</th>
                                  <th class="text-left">Field Level</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="item in details5" :key="item.name">
                                  <td>{{ item.name }}</td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      dense
                                      outlined
                                    ></v-text-field>
                                  </td>
                                  <td>
                                    <v-text-field
                                      hide-details="auto"
                                      dense
                                      outlined
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-row>
                  <v-row>
                    <div class="d-flex">
                      <div class="d-inline-flex flex-wrap ma-3">
                        <div class="d-flex mt-5 mr-3">
                          <v-btn large rounded color="primary" @click="tab--">
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
                          <v-btn
                            large
                            rounded
                            color="primary"
                            to="/engagement-info?s=1"
                          >
                            Scope
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
export default {
  components: { Float },
  data() {
    return {
      year: new Date().getFullYear(),
      ename: "",
      pname: "",
      lock2: false,
      radiod: false,
      lock: false,
      orgname: "",
      legname: "",
      radiok: false,
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
      details69: [
        {
          name: "nahenahe",
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
  methods: {
    sameasabove1() {
      if (this.radiok) {
        this.legname = this.orgname;
      } else {
      }
    },
    sameasabove2() {
      if (this.radiod) {
        this.pname = this.ename;
      } else {
      }
    },
    radiokclick2() {
      this.lock2 = !this.lock2;
      if (this.lock2) {
        this.pname = this.ename;
      } else {
        this.pname = "";
      }
    },
    radiokclick() {
      this.lock = !this.lock;
      if (this.lock) {
        this.legname = this.orgname;
      } else {
        this.legname = "";
      }
    },
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

<script setup>
import FormCol from '@/components/Form/FormCol.vue'
import FormRow from '@/components/Form/FormRow.vue'
import TextInput from '@/components/Form/TextInput.vue'
import SelectInput from '@/components/Form/SelectInput.vue'
import CheckboxInput from '@/components/Form/CheckboxInput.vue'
import { rules } from '@/modules/validation'
import { reactive } from 'vue'
// import { mande } from "mande";

const countries = [
  {
    title: 'Armenia',
    value: 1
  },
  {
    title: 'United States',
    value: 2
  },
  {
    title: 'Russia',
    value: 3
  }
]

const form = reactive({
  valid: false,
  processing: false,
  ready: false,
  inputs: {
    salutation: '',
    firstName: '',
    lastName: '',
    country: null,
    zip: '',
    city: '',
    street: '',
    houseNumber: '',
    phone: '',
    company: '',
    agreeRights: false,
    agreeAct: false,
    agreeKnowledge: false,
    agreeWithdrawal: false,
    agreeDataProtection: false,
    agreeTerms: false,
    allowOffers: false,
    allowNews: false
  }
})

// const approvalApi = mande('/api/approval');
const submitApprovalForm = () => {
  if (!form.valid) {
    return
  }

  form.processing = true

  // We dont have back-end currently to send data.
  // After back-end, we can use this code to send information to back-end
  // Or move this to Pinia action
  // approvalApi.post(form).then(() => {
  //   form.processing = false;
  //   form.ready = true;
  // });

  setTimeout(() => {
    form.processing = false
    form.ready = true
  }, 3000)
}
</script>

<template>
  <div class="page-container container">
    <template v-if="!form.ready">
      <div class="px-6 text-center">
        <h1 class="page-title font-weight-medium">Confirmation of approval</h1>
        <p class="text-grey mt-2 pb-1">
          In order to be able to act for you immediately (send an Exposé, carry out inspections or,
          if necessary, carry out purchase negotiations), we must receive your express consent for
          legal reasons.
        </p>
      </div>
      <v-form class="approval-form" v-model="form.valid" @submit.prevent="submitApprovalForm">
        <div class="border-default">
          <div class="approval-block pa-6">
            <v-card class="item border-default pa-6">
              <div class="item-code stroked text-grey">C21_ALYK_17776</div>
              <div class="item-title stroked">
                Exklusives Architektenhaus mit viel Raum und Weitblick!
              </div>
              <div class="item-infos text-grey">
                <div class="item-info">
                  <i class="mdi mdi-home-city-outline item-info-icon"></i>
                  <span class="stroked item-info-text">Apartment, Terraced House</span>
                </div>
                <div class="item-info ml-2">
                  <i class="mdi mdi-map-marker-outline item-info-icon"></i>
                  <span class="stroked item-info-text">40210 Düsseldorf</span>
                </div>
                <div class="item-info ml-2">
                  <i class="mdi mdi-cash-multiple item-info-icon"></i>
                  <span class="stroked item-info-text">250 000 €</span>
                </div>
              </div>
            </v-card>
          </div>
          <div class="approval-block pa-6">
            <h2 class="approval-block-title stroked">Commision</h2>
            <div class="stroked commission-text py-1">
              <img src="/img/no-commission.png" class="no-commission" alt="no commission" />
              <span
                >You pay us the agreed commission ONLY⚠️ when you buy the property. Not now.</span
              >
            </div>
          </div>
          <div class="approval-block pa-6">
            <h2 class="approval-block-title stroked">Personal data</h2>
            <div class="stroked text-grey">
              Check the information we have about you. Please, add new or change, if it is wrong.
            </div>
            <div class="mt-3">
              <form-row icon="hand-wave-outline">
                <form-col>
                  <text-input
                    label="Salutation"
                    :rules="[rules.required]"
                    v-model="form.inputs.salutation"
                  />
                </form-col>
              </form-row>
              <form-row icon="account-outline">
                <form-col>
                  <text-input
                    label="First name"
                    :rules="[rules.required]"
                    v-model="form.inputs.firstName"
                  />
                </form-col>
                <form-col>
                  <text-input
                    label="Last name"
                    :rules="[rules.required]"
                    v-model="form.inputs.lastName"
                  />
                </form-col>
              </form-row>
              <form-row icon="map-marker-outline">
                <form-col>
                  <select-input
                    label="Choose country"
                    :items="countries"
                    :rules="[rules.required]"
                    v-model="form.inputs.country"
                  />
                </form-col>
              </form-row>
              <form-row>
                <form-col>
                  <text-input label="Zip" :rules="[rules.required]" v-model="form.inputs.zip" />
                </form-col>
                <form-col>
                  <text-input label="City" :rules="[rules.required]" v-model="form.inputs.city" />
                </form-col>
                <form-col>
                  <text-input
                    label="Street"
                    :rules="[rules.required]"
                    v-model="form.inputs.street"
                  />
                </form-col>
                <form-col>
                  <text-input
                    label="House number"
                    :rules="[rules.required]"
                    v-model="form.inputs.houseNumber"
                  />
                </form-col>
              </form-row>
              <form-row icon="phone-outline">
                <form-col>
                  <text-input
                    label="Phone"
                    :rules="[rules.required]"
                    v-model="form.inputs.phone"
                    message="Optional field"
                  />
                </form-col>
              </form-row>
              <form-row icon="briefcase-variant-outline">
                <form-col full-size>
                  <text-input
                    label="Company"
                    :rules="[rules.required]"
                    v-model="form.inputs.company"
                    message="Optional field"
                  />
                </form-col>
              </form-row>
            </div>
          </div>
          <div class="approval-block pa-6">
            <h2 class="approval-block-title stroked">What do you confirm?</h2>
            <div>
              <div class="stroked py-1">By clicking the "I agree" button, you confirm that:</div>
              <div class="pl-4">
                <checkbox-input
                  :rules="[rules.required]"
                  v-model="form.inputs.agreeRights"
                  asterisk
                >
                  We have duly instructed you about your right to object
                </checkbox-input>
                <checkbox-input v-model="form.inputs.agreeAct" :rules="[rules.required]">
                  You agree that we will act for you ahead of time
                </checkbox-input>
                <checkbox-input
                  :rules="[rules.required]"
                  v-model="form.inputs.agreeKnowledge"
                  asterisk
                >
                  You confirm that you have received knowledge of the buyer's commission of 11%
                  incl. 16% MwSt.
                </checkbox-input>
                <checkbox-input
                  :rules="[rules.required]"
                  v-model="form.inputs.agreeWithdrawal"
                  asterisk
                >
                  You are aware that your right of withdrawal expires once we have fully fulfilled
                  the contract.
                </checkbox-input>

                <checkbox-input
                  :rules="[rules.required]"
                  v-model="form.inputs.agreeDataProtection"
                  asterisk
                >
                  You have read and agreed to our <a href="#">Data Protection</a>.
                </checkbox-input>

                <checkbox-input :rules="[rules.required]" v-model="form.inputs.agreeTerms" asterisk>
                  You have read the <a href="#">General Terms and Conditions</a> and accept them.
                </checkbox-input>
              </div>
            </div>
            <div>
              <div class="stroked py-1">Optional:</div>
              <div class="pl-4">
                <checkbox-input v-model="form.inputs.allowOffers">
                  You allow CENTURY 21 to send you further offers for other suitable properties by
                  email.
                </checkbox-input>
                <checkbox-input v-model="form.inputs.allowNews">
                  You allow CENTURY 21 to send you real estate news by email.
                </checkbox-input>
              </div>
            </div>
            <div class="approval-block-additional-text stroked text-grey">
              You can revoke this consent at any time: either informally by email or telephone or
              automatically with the link included in each email. We do not use your data for any
              other purpose.
            </div>
          </div>
        </div>
        <div class="approval-form-submit text-center pt-6">
          <v-btn type="submit" class="button-default" :loading="form.processing">I CONFIRM</v-btn>
        </div>
      </v-form>
    </template>
    <template v-else>
      <div class="text-center pt-14">
        <div><img src="/img/approved.png" alt="approved" class="approved-img" /></div>
        <h1 class="page-title font-weight-medium pt-6">Thank you for approval</h1>
        <div class="pt-2">
          In the next email, we will send you detailed information about the property, you are
          interested in. Check your inbox, you might have already received it.
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  font-size: 34px;
}

.approval-form {
  margin-top: 24px;
  border-radius: 8px;
}

.approval-block {
  &:not(:last-child) {
    border-bottom: 1px solid rgb(var(--v-theme-border));
  }

  .approval-block-title {
    font-size: 24px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 18px;
  }
}

.item {
  .item-code {
    font-size: 12px;
  }

  .item-title {
    margin-top: 2px;
    font-size: 18px;
  }

  .item-infos {
    display: flex;
    margin-top: 15px;

    .item-info {
      margin-right: 12px;

      .item-info-icon {
        font-size: 0;
        display: inline-block;
        line-height: 1;
        margin-right: 8px;
        vertical-align: middle;

        &:before {
          font-size: 24px;
        }
      }

      .item-info-text {
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
}

img.no-commission {
  width: 40px;
  height: 40px;
}

.commission-text {
  img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
}

.approval-block-additional-text {
  font-size: 14px;
}

.approved-img {
  width: 200px;
  height: auto;
}
</style>

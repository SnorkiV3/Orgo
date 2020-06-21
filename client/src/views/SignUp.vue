<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" @submit.prevent="signUp" @keydown.prevent.enter>
                  <v-text-field v-model="user.email" :rules="emailRules" label="Email" required></v-text-field>

                  <v-text-field
                    v-model="user.password"
                    :rules="[passwordRules.required, passwordRules.min]"
                    label="Password"
                    type="password"
                    hint="At least 8 characters"
                    counter
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="user.confirmPasword"
                    :rules="[passwordRules.confirm]"
                    label="Confirm Password"
                    type="password"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="user.displayName"
                    :rules="noEmptyRules"
                    label="Display Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="user.imageUrl"
                    :rules="noEmptyRules"
                    label="Image Url"
                    required
                  ></v-text-field>

                                <v-card-actions>
                <v-btn :to="{name: 'login'}">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn type="submit" :disabled="!valid">Register</v-btn>
              </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "signUp",
  data(vm) {
    return {
      valid: false,
      user: {
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
        imageUrl: ""
      },
      noEmptyRules: [value => !!value || "Cannot be empty."],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: {
        required: value => !!value || "Required",
        min: value => value.length >= 8 || "Min 8 characters",
        confirm: value => value === vm.user.password || "Password don't match"
      }
    };
  },
  methods: {
    signUp() {
      if (this.valid) {
        console.log("The form is vald");
      }
    }
  }
};
</script>

<template>
  <v-container style="margin-top: 100px; background-color: grey;">
    <v-row>
      <v-col>
        <v-card class="book">
          <v-form ref="register" @submit.prevent="register">
            <v-container>
              <v-row justify="center">
                <v-col md="6" lg="4" sm="8" cols="12">
                  <br />
                  <h3
                    style="
                      color: #373636;
                      font-weight: 700;
                      font-size: 25px;
                      text-decoration: underline;
                    "
                  >
                    Register
                  </h3>
                  <br /><br />

                  <!-- username -->

                  <v-text-field
                    label="Username"
                    :rules="rules.username"
                    outlined
                    dense
                    v-model="Input.username"
                  ></v-text-field>

                  <!-- email -->

                  <v-text-field
                    label="Email"
                    type="email"
                    :rules="rules.email"
                    outlined
                    dense
                    v-model="Input.email"
                  ></v-text-field>

                  <!-- phone number -->

                  <v-text-field
                    label="phone number"
                    type="phone number"
                    outlined
                    dense
                    v-model="Input.PhoneNumber"
                  ></v-text-field>

                  <!-- password -->

                  <v-text-field
                    label="password"
                    type="password"
                    outlined
                    dense
      
                    v-model="Input.password"
                  ></v-text-field>

                  <v-btn @click="register" color="Black" dark>Submit</v-btn
                  ><br />
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      Input: {
        username: null,
        email: null,
        PhoneNumber: null,
        role: "User",
        password: null,
        
      },
      isUsernameDuplicate: false,
      isEmailnameDuplicate: false,
      rules: {
        username: [
          (v) => !!v || "Usernamer is required",
          (v) =>
            (!!v && !this.isUsernameDuplicate) || "Username is already exist",
        ],
        email: [
          (v) => !!v || "Email is required",
          (v) => (v ? /.+@.+\..+/.test(v) : true || "Email not valid"),
          (v) =>
            (!!v && !this.isEmailnameDuplicate) || "Email is already exist",
        ],
      },
    };
  },
  methods: {
    register() {


  this.$fire({
  title: "login",
  text: "Register SUCCESSFULLY",
  type: "success",
 
}).then(() => {  
    
      console.log(this.Input);
      if (this.$refs.register.validate()) {
        this.$Axios
          .post(`${this.$hostname}/users/register`, this.Input, {
            Headers: { "content-type": "application/json" },
          })
          .then(() => {
       
            this.$router.push("/");
          })
          .catch((e) => {
       
            console.log(e);
          });
      }

});

    },
  },
};
</script>


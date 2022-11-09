<template>
  <v-container style="margin-top: 100px; background-color:grey; ">
    <v-row>
      <v-col>
        <v-card class="book">
          <v-form @submit.prevent="login">
            <v-container>
              <v-row justify="center">
                <v-col md="6" lg="4" sm="8" cols="12">
                  <br /><br />
                  <h3 
                    style="
               
                      color: black;
                      font-weight: 700;
                      font-size: 25px;
                      text-decoration: underline;
                    "
                  >
                    Login
                  </h3>
                  <br />
                  <v-text-field
                    label="Username"
                    :rules="rules.username"
                    outlined
                    dense
                    v-model="Input.username"
                  ></v-text-field>
                  <v-text-field
                    label="password"
                    type="password"
                    :rules="rules.password"
                    outlined
                    dense
                    v-model="Input.password"
                  ></v-text-field>
                  <v-btn @click="login" color="black" dark>Submit</v-btn><br />
                  <br />
       

                  <router-link
                  
                    class="register_link"
                    aria-current="page"
                    to="/RegisterUser"
                    >register ?</router-link
                  ><br />

                
                  <br />
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
  name: "loginBook",
  data() {
    return {
      Input: {
        username: null,
        password: null,
  
      },

      isUsernameDuplicate: false,
      isPasswordnameDuplicate: false,
      rules: {
        username: [
          (v) => !!v || "Usernamer is required",
          (v) =>
            (!!v && !this.isUsernameDuplicate) || "Username is already exist",
        ],
        password: [
          (v) => !!v || "password is required",
          (v) =>
            (!!v && !this.isPasswordnameDuplicate) ||
            "password is already exist",
        ],
      },
    };
  },
  methods: {
    login() {

      
              
              this.$fire({
  title: "login",
  text: "LOGIN SUCCESSFULLY",
  type: "success",
 
}).then(() => {  
      console.log(this.Input);
      this.$Axios
        .post(`${this.$hostname}/Users/authenticate`, this.Input, {
          Headers: { "content-type": "application/json" },
        })
       .then((res) => {
          this.$session.start();
          this.$session.set("id", res.data.id);
          this.$session.set("role", res.data.role);
      
   

          if (this.$session.get("role") == "User") {
            this.$router.push("/UserCry");
          }   else if(this.$session.get("role") == "Admin"){
          
            this.$router.push("/Home");
        
          } else {
           this.$alert("Error 404");
          }
        
        })
        .catch((e) => {
          console.log(e);
        });

});


    },
  },


};
</script>

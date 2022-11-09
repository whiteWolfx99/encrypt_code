
<template>

<v-container style="display: flex; flex-direction: column; justify-content: center">

<v-container fluid style="margin-top:20px;" >
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-textarea
          label="Enter a string"
          v-model="pvtData"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
      </v-col>
<v-col cols="12"
        sm="4">
    <v-btn style="margin-top:5px; margin-right: 5px;" @click="encryptData"> Encrypt</v-btn>
      <v-btn style="margin-top:5px; margin-right: 5px;"  @click="decryptData"> Decrypt</v-btn>
      <v-btn style="margin-top:5px; margin-right: 5px;"  @click="deleteData"> Delete</v-btn> <br>
</v-col>
  
  </v-row>

  <v-row justidy-center style="text-align: center;">
    <v-col cols="6">

<h3 style="background-color: green; ">get Encrypted Data</h3>
      <v-textarea
       style= "margin-top: 30px"

       v-model="encData"
          auto-grow
          outlined
          rows="5"
          row-height="15"
        ></v-textarea><br/>

    </v-col>




  </v-row>
    <v-row justidy-center style="text-align: center;">
      <v-col cols="6">

<h3 style="background-color: Red; ">get decrypt Data</h3>
   <v-textarea
       style= "margin-top: 30px"

       v-model="dcData"
          auto-grow
          outlined
          rows="5"
          row-height="15"
        ></v-textarea>
    </v-col>
    </v-row>  




    


  
</v-container>


       <!-- <v-container  v-if="$session.get('role') != 'Admin' &&  $session.get('role') != 'User'">
     <v-row>
      <v-col style=" text-align: center;">

        <img style="width:150px; padding-bottom: 20px;"  src="https://th.bing.com/th/id/R.753cc3bfbbea8781a76a570e4ead94cb?rik=xZ5L61AH%2be8jeQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fwrong-icon-69.png&ehk=xncwzMugA2ObA3QMBWAn4Wgwd5UKdnXt%2fyaITGBrzq4%3d&risl=&pid=ImgRaw&r=0" alt="eror image">
        <h1 style="color: red; text-align: center;">
Error 403 Not authrized 
        </h1>
        <h3 style=" text-align: center;">Only Admin and User can see data!</h3>
      </v-col>
     </v-row>
    </v-container> -->
</v-container>
</template>

<script>
export default {
  name: "UserCry",
  data() {
  return {
    pvtData: "",
    secret: "123#$%",
    encData: "",
    dcData: "",

  };
  },

  methods: {

  encryptData() {
  if (this.pvtData.length) {
    // hash the name with any algorithm
    const data = this.$CryptoJS.AES.encrypt(this.pvtData, this.secret).toString();

    // store into localStorage
    localStorage.setItem("secretData", data);

    // display the encrypted data
    this.getEncryptedData();
  }
},



getEncryptedData() {
  // get the data from localStorage or send placeholder text
  this.encData = localStorage.getItem("secretData") || "No value present";
},


decryptData() {
const secretData = localStorage.getItem("secretData");

  // decrypt the data and convert to string
  const decryptData = this.$CryptoJS.AES.decrypt(
    secretData,
    this.secret
  ).toString(this.$CryptoJS.enc.Utf8);
    
  this.$confirm(decryptData,'Decrypted private data:', 'warning').then(() => {
  this.$fire({
  title: "Decrypted",
  text: "Decrypted SUCCESSFULLY",
  type: "success",
 
}).then(() => {  
this.getdecryptData();
});
});
    
},


getdecryptData() {
const secretData = localStorage.getItem("secretData");
      const decryptData = this.$CryptoJS.AES.decrypt(
    secretData,
    this.secret
  ).toString(this.$CryptoJS.enc.Utf8);
  // get the data from localStorage or send placeholder text
  this.dcData = decryptData;
},


deleteData() {
  // remove data from localStorage
  localStorage.removeItem("secretData");

  // update text
  this.getEncryptedData();
 
},
  }
  }
</script>

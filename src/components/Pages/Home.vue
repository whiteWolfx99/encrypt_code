
<template>
  <v-container>
    <!-- Time -->
    <v-container id="app" class="clock" style="color: Black"  v-if="$session.get('role') == 'Admin'">
      <v-row justify="center">
        <v-col
          style="
            background-color: #483c32;
            border-radius: 15px;
            text-align: center;
            margin-top: 20px;
          "
        >
          <slot :time="time">
            <h3 style="font-size: 75px; color: white">
              Time:
              <p style="font-size: 75px; color: Red">
                {{ time.toLocaleTimeString() }}
              </p>
            </h3>
          </slot>
        </v-col>
      </v-row>
    </v-container>
    <!-- /Time -->
    <v-col  v-if="$session.get('role') == 'Admin'">
   <hr />
    </v-col>
 
    <!-- User -->
    <v-container>
      <br />
     

      <v-row>
        <v-col md="6" lg="4" sm="12" cols="12"  v-if="$session.get('role') == 'Admin'">
          <v-text-field placeholder="Users" outlined dense v-model="search">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row  v-if="$session.get('role') == 'Admin'">
        <v-col>
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>username</th>
                <th>Email</th>
                 <th>PhoneNumber</th>
                 <th>Role</th>
                <th class="col-sm-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredBooks" :key="item.id">
                <td>
                  <h5>{{ item.id }}</h5>
                </td>
                <td>
                  <h5>{{ item.username }}</h5>
                </td>

                <td>
                  <h5>{{ item.email }}</h5>
                </td>

                  <td>
                  <h5>{{ item.phoneNumber }}</h5>
                </td>

                  <td>
                  <h5>{{ item.role }}</h5>
                </td>

                <td>
                  <v-icon @click="Delete(item.id)" large color="error"
                    >mdi-delete</v-icon
                  >

               
                </td>
              </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>

    <!-- /User -->

    <v-container v-if="$session.get('role') != 'Admin'">
     <v-row>
      <v-col style=" text-align: center;">

        <img style="width:150px; padding-bottom: 20px;"  src="https://th.bing.com/th/id/R.753cc3bfbbea8781a76a570e4ead94cb?rik=xZ5L61AH%2be8jeQ&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fwrong-icon-69.png&ehk=xncwzMugA2ObA3QMBWAn4Wgwd5UKdnXt%2fyaITGBrzq4%3d&risl=&pid=ImgRaw&r=0" alt="eror image">
        <h1 style="color: red; text-align: center;">
Error 403 Not authrized 
        </h1>
        <h3 style=" text-align: center;">Only Admin can see data!</h3>
      </v-col>
     </v-row>
    </v-container>
  


  </v-container>
</template>

<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      time: new Date(),

      items: [],
      search: "",
      id: 0,

      data: {
        username: null,
        email: null,
        phoneNumber: null,
        role:null,
      
        id: 0,
      },
    };
  },
  created() {
    setInterval(() => {
      this.time = new Date(this.time.getTime() + 1000);
    }, 1000);
  },

  methods: {
    getdads() {
      this.$Axios
        .get(`${this.$hostname}/Users/GetUsers`)
        .then((Response) => {
          this.items = Response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    



    Delete(id) {

  this.$confirm('Are you sure', 'conformation', 'warning').then(() => {
  this.$fire({
  title: "DELETED",
  text: "DELETED SUCCESSFULLY",
  type: "success",
 
}).then(() => {  
  this.$Axios
        .delete(`${this.$hostname}/Users/${id}`, this.item, {
          Headers: { "content-type": "application/json" },
        })
        .then(() => {
      
          this.getdads();
        })
        .catch((e) => {
          console.log(e);
        });

});
});
    
    },

   
  },

  mounted() {
    this.getdads();
  },

  computed: {
    filteredBooks() {
      return this.items.filter((b) =>
        b.username != null
          ? b.username.toLowerCase().includes(this.search.toLowerCase())
          : true
      );
    },
  },
};
</script>

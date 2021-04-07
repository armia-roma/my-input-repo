<template>
    <div class="contenir">
        <div class="form" >

            <my-input type="text" label="Username" v-model="employ.userName"></my-input>

        

            <label>Nationality:</label>
            <select v-model="employ.nationality" @change="conectCity">
                <option value="sudan">Sudan</option>
                <option value="egypt">Egypt</option>
                <option value="uae">UAE</option>
                <option value="usa">USA</option>
                <option value="ksa">KSA</option>
            </select>

            <div class="gender">
          
                <label>gender:</label>

                <label>Male</label>
                <input type="radio" name="gender" value="male" v-model="employ.gender"> 

                <label>Female</label> 
                <input type="radio" name="gender" value="female" v-model="employ.gender">
            </div>
      
        <label>Place of Birth:</label>
        <select v-model="employ.placeOfBirth">
            <option value="sudan">Sudan</option>
            <option value="egypt">Egypt</option>
            <option value="uae">UAE</option>
            <option value="usa">USA</option>
            <option value="ksa">KSA</option>
        </select>

        <my-input type="date" label="Date of Birth:" v-model="employ.dateOfBirth"></my-input>
        

        <my-input label="Phone Number:" v-model="employ.phoneNumber"></my-input>
        

        <my-input label="Religion:" v-model="employ.religion"></my-input>

       


        <label>Place of Residence:</label>
        <select v-model="employ.placeOfResidence">
            <option v-for="city in citys" :key="city" :value="city">{{city}}</option>
        </select>
        <select-option country="country" />




        <button @click="register">Register</button>

        <!-- <p v-if="employDetials">{{employDetials}}</p> -->
        <table v-if="employDetials" >
            <thead v-if="employDetials">
                <tr v-if="employDetials">
                    <th>Username</th>
                    <th>Nationality</th>
                    <th>Place of Birth</th>
                    <th>Date of Birth</th>
                    <th>Phone Number</th>
                    <th>Gender</th>
                    <th>Religion</th>
                    <th>Place of Residence</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for= "detials in employDetials" :key= "detials.phoneNumber">
                    <td>{{detials.userName}}</td>
                    <td>{{detials.nationality}}</td>
                    <td>{{detials.placeOfBirth}}</td>
                    <td>{{detials.dateOfBirth}}</td>
                    <td>{{detials.phoneNumber}}</td>
                    <td>{{detials.gender}}</td>
                    <td>{{detials.religion}}</td>
                    <td>{{detials.placeOfResidence}}</td>
                </tr>
            </tbody>

        </table> 
    </div>
  </div>
</template>

<script>
import myInput from "../components/MyInput"
import SelectOption from "../components/SelectOption"
export default {
    name: "Confuse",
    components: {myInput,SelectOption},
    data() {
        return {
            employ:{ 
                userName: "",
                nationality: "",
                placeOfBirth: "",
                dateOfBirth: "",
                phoneNumber: "",
                gender: "",
                religion: "",
                placeOfResidence: ""
            },

            sudanCities: [ "khartum", "bahere", "omderman" ],
            egyptCities: [ "arish", "Dar Alsalm", "luxor" ],
            citys: [],
            employDetials: []

        }
    },
    methods: {
        register() {
            this.employDetials.push(this.employ);
            this.employ = {
                userName: "",
                nationality: "",
                placeOfBirth: "",
                dateOfBirth: "",
                phoneNumber: "",
                religion: "",
                placeOfResidence: ""
            }
        },

        type() {
            if(this.male == "male") {
                this.type = this.male;
            } else(this.type = this.famle)
        },

        conectCity() {
            if(this.employ.nationality == "sudan") {
                this.citys = [...this.sudanCities];
            }
            else if(this.employ.nationality =="egypt") {
                this.citys = [...this.egyptCities];
            }
        }
    }
}
</script>

<style>
body {
    background: gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 1px;
    box-sizing:content-box;
}
.form {
    margin: 30px auto;
    background: white;
    width: 420px;
    border-radius: 10px;
    text-align: left;
    padding: 40px;
    box-sizing:content-box;
    overflow-wrap: scroll;
}
input, select {
    display: block;
    margin: 20px auto;
    border: none;
    border-bottom: 1px sold black;
    border-bottom: 1px solid #ddd;
    outline: none;
    letter-spacing: 1px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
    color: #555;

}
input[type="radio"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
    bottom: 2px;
}
label {
    color: #aaa;
    font-weight: bold;
}
.nat {
    margin-bottom: 10px;
}
table {
    /* border:solid 1px black; */
    box-sizing: content-box;
    padding: auto;
    border-collapse: collapse;
    margin: auto;
    font-size: 0.9em;
    overflow: scroll;
}
td {
    border: solid 1px black;
    box-sizing: content-box;
    padding: 0.25rem;
    text-align: left;
}
</style>
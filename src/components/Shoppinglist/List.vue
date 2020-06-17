<template>
    <div class="wrapper">
        <h1>Boodschappenlijst</h1>
        <v-text-field v-model="boodschap"></v-text-field>
        <v-btn @click="voegToeAanBoodschappenlijst()">Voeg toe</v-btn>
        <table id="boodschappen_lijst">
            <tbody>
                <tr v-for="(boodschap, index) in boodschappenlijst" :key="index">
                    <td>{{boodschap}}</td>
                    <td><v-btn @click="verwijderBoodschappenlijst(index)">Verwijderen</v-btn></td>
                </tr>
            </tbody>
        </table>

        <h1>Chat</h1>
        <v-text-field v-model="gebruikersnaam"></v-text-field>
        <v-textarea v-model="bericht"></v-textarea><v-btn @click="addMessage()">Send</v-btn>
        <v-card v-for="(bericht,index) in berichten" :key="index">
            <v-card-text><b>{{bericht.gebruiker}}:</b> {{bericht.bericht}}</v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data : () => {
        return {
            gebruikersnaam: "",
            bericht: "",
            berichten: [],
            boodschap: null,
            boodschappenlijst: []
            
        }
    },
    created(){
        this.berichten = JSON.parse(localStorage.getItem('berichten'));

        this.interval = setInterval(() =>{
            this.berichten = JSON.parse(localStorage.getItem('berichten'));
        }, 1000)
    },
    methods : {
        addMessage(){
            this.berichten.push({
                gebruiker: this.gebruikersnaam,
                bericht: this.bericht
            })
            
            localStorage.setItem('berichten', JSON.stringify(this.berichten))
        },
        voegToeAanBoodschappenlijst(){
            this.boodschappenlijst.push(this.boodschap);
            console.log(this.boodschappenlijst)
        },
        verwijderBoodschappenlijst(index){
            this.boodschappenlijst.splice(index, 1)
        }
    }
}
</script>

<style scoped>

    .wrapper{
        padding: 15px;
    }

    table{
        width: 100%;
    }


</style>
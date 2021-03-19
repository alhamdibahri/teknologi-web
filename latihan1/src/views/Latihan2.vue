<template>
  <div>
    <div class="nav-bar"></div>
    <div class="produk">
      <div class="gambar-produk">
        <img v-bind:src="foto" alt="Mantap" >
      </div>
      <div class="info-produk">
        <h1>{{ produk }}</h1>
        <p v-if="stok > 10">Stok Ada</p>
        <p v-else-if="stok< 10 && stok > 0">Buruan, hampir habis</p>
        <p v-else>Kosong</p>
        <button v-show="stok > 0" style="background:#d9534f; font-size:20px; border:none; color:white;">Kuy, Lagi Diskon!!!</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      produk: "Kaos Kaki",
      foto: require("./../assets/sepatu.png" ),
      link: "https://facebook.com/pepenk0",
      stok: 5,
    }
  }
}
</script>

<style scoped>
body{
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}
.nav-bar{
  background: linear-gradient(-90deg, #84CF6A, #16C0B0);
  height: 60px;
  margin-bottom: 15px;
}

.produk{
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

img{
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px .5px 1px #d8d8d8;
}

.gambar-produk{
  width: 80%;
}

.gambar-produk,
.info-produk{
  margin-top: 10px;
  width: 50%;
}
</style>
<template>
    <div>
        <h1>Produk Kami</h1>
        <ol>
            <li>{{ produk }}</li>
            {{desk}}
        </ol>
    </div>
</template>


<script>

export default {
  name: 'App',
  data(){
    return{
      produk: "Sepatu",
      desk: "Produk Sepatu yang sesuai gaya kekinian"
    }
  }
}
</script>

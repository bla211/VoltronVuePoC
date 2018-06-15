<template>
  <div id="product-nav">
    <img id="logo" src="https://next.epfrglobal.com/Content/Images/informa-whiteout-small.png"/>
    <ul>
      <li>
        <router-link :to="{ name: 'Dashboard' }"><img src="https://next.epfrglobal.com/Content/Images/dashboard_off.jpg"/></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Data' }"><img src="https://next.epfrglobal.com/Content/Images/data_off.jpg"/></router-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  #product-nav{
    width: 100px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    background-color: #141414;
    padding: 0 0 10px 0;
    #logo{
      width: 100%;
      padding: 20px;
    }
    ul{
      width: 100%;
      float: left;
      padding: 0;
      margin: 0;
      li{
        display: block;
        width: 100%;
        float: left;
        a{
          color: white;
          text-decoration: none;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>

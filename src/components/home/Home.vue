<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <!-- Alternativa à interpolação: <h1 v-text="titulo"></h1> -->

    <input type="search" class="filter-input" @input="filter = $event.target.value" placeholder="Buscar foto pelo título">

    <ul class="list-photos">
      <li class="list-photos-item" v-for="photo of Filteredphotos" :key="photo._id">
        <my-panel :title="photo.titulo">
          <my-responsive-image v-transform:scale.animate="1.2" :url="photo.url" :title="photo.titulo"></my-responsive-image>
          <my-button 
            type="button"
            label="remover"
            @activeButton="remove(photo)"
            :confirmation="true"
            buttonStyle="warning"
          >
          </my-button>
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel';
import ResponsiveImage from '../shared/responsive-image/Responsive-image';
import Button from '../shared/button/Button';

export default {
  components: {
    'my-panel': Panel,
    'my-responsive-image': ResponsiveImage,
    'my-button': Button
  },
  
  data() {
    return {
      title: 'VuePic',
      photos: [],
      filter: ''
    }
  },

  computed: {
    Filteredphotos() {
      if(this.filter){
        let exp = new RegExp(this.filter.normalize("NFD").replace(/[^a-zA-Z]/g, ""), 'i');
        
        return this.photos.filter( photo => exp.test(photo.titulo.normalize("NFD").replace(/[^a-zA-Z]/g, "")));

      } else {
        return this.photos;
      }
    }
  },

  methods: {
    remove(photo) {
      alert('A foto ' + photo.titulo + ' foi removida');
    },
  },

  created() {
    let promise = this.$http.get('http://localhost:3000/v1/fotos');

    promise
      .then(res => res.json())
      .then(fotos => this.photos = fotos, err => console.log(err));
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 96%;
    margin: 0 auto;

    h1 {
      text-align: center;
    }

    .filter-input {
      display: block;
      width: 20%;
      margin: 30px 40px 50px 40px;
      padding: 5px 8px;
      outline: none;
      border-radius: 3px;
      border: solid 1.5px #D3D3D3;
      -webkit-transition: 0.5s;
      transition: 0.5s;

      &:focus {
        box-shadow: 0 0 5px 1px  rgba(211,211,211,0.6);
      }
    }

    .list-photos {
      list-style: none;
      padding: 0 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, 280px);
      gap: 3rem 4rem;

      .list-photos-item {
        display: inline-block;
        margin: 10px;
      }
    }
  }
</style>

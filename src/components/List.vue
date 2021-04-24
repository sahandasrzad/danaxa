<template>
  <div class="list-container">
    <b-form-checkbox-group class="list-actions" id="checkbox-group" @change="updateList" v-model="selected">
      <b-form-checkbox v-for="item in options" :key="item.index" :value="item.value">
        <icon :data="item.icon" width="20" height="20" color="white" />
      </b-form-checkbox>
    </b-form-checkbox-group>
    <div class="list-parent">
      <div v-for="obj in showList" :key="obj.index" class="list-item">
        <icon class="list-item-icon" :data="obj.icon" width="22" height="22" :color="obj.icon_color" />
        <div class="list-item-name">{{obj.name}}</div>
        <button class="list-item-btn">{{obj.num}}</button>
      </div>
    </div>
  </div>
</template>
<script>
  import human from '@/assets/svg/human.svg'
  import binary from '@/assets/svg/binary.svg'
  import newDoc from '@/assets/svg/newDoc.svg'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        selected: [],
        options: [{
            item: 'boundingBox',
            name: 'boundingBox',
            icon: binary,
            value: 1
          },
          {
            item: 'humanBox',
            name: 'humanBox',
            icon: human,
            value: 2
          },
          {
            item: 'cornerBox',
            name: 'cornerBox',
            icon: newDoc,
            value: 3
          }
        ],
        showList: [],
        arrList: [{
            icon: binary,
            icon_color: 'yellow',
            name: 'binary',
            num: 16,
            id: 1
          },
          {
            icon: binary,
            icon_color: 'green',
            name: 'binary',
            num: 33,
            id: 1
          },
          {
            icon: binary,
            icon_color: 'purple',
            name: 'binary',
            num: 30,
            id: 1
          },
          {
            icon: newDoc,
            icon_color: 'green',
            name: 'newDoc',
            num: 43,
            id: 3
          },
          {
            icon: newDoc,
            icon_color: 'yellow',
            name: 'newDoc',
            num: 44,
            id: 3
          },
          {
            icon: newDoc,
            icon_color: 'purple',
            name: 'newDoc',
            num: 45,
            id: 3
          },
          {
            icon: human,
            icon_color: 'red',
            name: 'human_box',
            num: 44,
            id: 2
          },
          {
            icon: human,
            icon_color: 'green',
            name: 'human_box',
            num: 45,
            id: 2
          },
        ]
      }
    },
    mounted() {
      this.updateList()
    },
    methods: {
      updateList() {
        if (this.selected.length > 0) {
          let filterArr = []
          const newArr = this.selected.map(val => this.arrList.filter(item => item.id === val))
          newArr.forEach(e => {
            e.forEach(i => {
              filterArr.push(i)
            })
          });
          this.showList = filterArr
        } else {
          this.showList = this.arrList
        }
      }
    },
  }
</script>
<style lang="scss">
  .list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .list-actions {
    .custom-checkbox {
      margin: 1px 27px !important;
    }
    width: 300px;
    height: 50px;
    background-color: #28282D;
    padding-top: 12px;
    border-bottom: 1px solid #6a6a72;
  }
  .list-parent {
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #28282D;
  }
  .list-item {
    display: flex;
    margin: 8px;
    padding: 8px;
  }
  .list-item:hover {
    background-color: #2e2e31 !important;
    cursor: pointer;
    transition: 0.2s all;
  }
  .list-item div {
    width: 150px;
  }
  .list-item>* {
    flex: 0 0 auto;
  }
  .list-item-btn {
    width: 80px;
    color: white;
    background-color: #28282D;
    border: 1px solid #6a6a72;
    border-radius: 3px;
  }
  .list-item-name {
    color: white;
  }
</style>
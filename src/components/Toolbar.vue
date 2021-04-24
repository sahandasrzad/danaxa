<template>
  <div class="toolbar-container">
    <div class="toolbar-list">
      <div class="toolbar-header" @click="resetAction()">
        <icon v-if="selected.shortKey === null" class="list-item-icon" :data="touchScreen" width="22" height="22"
          color="#59BF63" />
        <icon v-if="selected.shortKey !== null" class="list-item-icon" :data="touchScreen" width="22" height="22"
          color="#7D7D7D" />
      </div>
      <div class="toolbar-body">
        <div class="toolbar-item" v-for="item in toolSet" :key="item.index" @click="keyAction(item.shortKey)">
          <icon v-if="selected.shortKey !== item.shortKey" class="list-item-icon" :data="item.icon" width="22"
            height="22" color="#7D7D7D" />
          <icon v-if="selected.shortKey === item.shortKey" class="list-item-icon" :data="item.icon" width="22"
            height="22" color="#59BF63" />
        </div>
      </div>
    </div>
    <div v-if="selected.shortKey !== null" class="mt-5">
      <p>chosen tool :</p>
      <p>name => {{selected.name}}</p>
      <p>icon =>
        <icon :data="selected.icon" width="22" height="22" color="red" />
      </p>
      <p>shortKey => {{selected.shortKey}}</p>
    </div>

  </div>
</template>
<script>
  import eraser from '@/assets/svg/eraser.svg'
  import gps from '@/assets/svg/gps.svg'
  import magicPen from '@/assets/svg/magicPen.svg'
  import paintBrush from '@/assets/svg/paintBrush.svg'
  import pen from '@/assets/svg/pen.svg'
  import pin from '@/assets/svg/pin.svg'
  import select from '@/assets/svg/select.svg'
  import touchScreen from '@/assets/svg/touchScreen.svg'
  export default {
    name: 'Toolbar',
    data() {
      return {
        touchScreen,
        keys: ['1', '2', '3', '4', '5', '6', '7', 'Escape'],
        toolSet: [{
            name: 'selector',
            icon: select,
            shortKey: 1
          },
          {
            name: 'pen',
            icon: pen,
            shortKey: 2
          },
          {
            name: 'magicPen',
            icon: magicPen,
            shortKey: 3
          },
          {
            name: 'brush',
            icon: paintBrush,
            shortKey: 4
          },
          {
            name: 'eraser',
            icon: eraser,
            shortKey: 5
          },
          {
            name: 'pin',
            icon: pin,
            shortKey: 6
          },
          {
            name: 'gps',
            icon: gps,
            shortKey: 7
          },

        ],
        selected: {
          name: null,
          icon: null,
          shortKey: null
        }
      }
    },
    methods: {
      keyAction(e) {

        this.selected = this.toolSet[parseInt(e) - 1]
      },
      resetAction() {
        this.selected = {
          name: null,
          icon: null,
          shortKey: null
        }
      }
    },
    mounted() {
      this._keyListener = function (e) {
        e.preventDefault();
        if (this.keys.includes(e.key) && e.key === 'Escape') {
          this.resetAction()
        } else if (this.keys.includes(e.key))
          this.keyAction(e.key)

      };

      document.addEventListener('keydown', this._keyListener.bind(this));
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this._keyListener);
    }
  }
</script>
<style lang="scss">
  .toolbar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .toolbar-list {
    width: 60px;
    background-color: #4a5060;
  }

  .toolbar-item {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .toolbar-header {
    width: 60px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid rgb(58, 61, 61);
  }

  .toolbar-header:hover {
    background-color: #42444b;
    transition: 0.2s all;
  }

  .toolbar-item:hover {
    background-color: #42444b;
    transition: 0.2s all;
  }
</style>
<template>
  <!-- <div id="chartEle1" style="height: 400px; margin: 0 auto; width: 50%"></div> -->
  <div><label>{{this.title}}</label></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ['title'],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  // mounted() {
  //   this.Chart1 = this.$echarts.init(document.getElementById("chartEle1"));
  //   this.setChartOption();
  // },
  methods: {
    setChartOption() {
      let option = {
        title: {
          text: "echarts使用测试",
          subtext: "简单柱状图",
          // x:'center'
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 300, 334, 390, 330, 220],
          },
        ],
      };
      this.Chart1.setOption(option, true); //setOption：设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过它完成，ECharts会合并新的参数和数据，然后刷新图表。
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

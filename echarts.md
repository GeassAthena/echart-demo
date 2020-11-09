###ECharts
#### 1.获取ECharts
1.官网下载源码构建
2.在ECharts的GitHub上获取
3.npm安装ECharts包
4.CDN引入

#### 2.使用ECharts
引入方式：
+ 直接引入构建好的echarts的js文件
+ npm安装通过ES6的import或者CommonJS的require导入

**echarts实例** 使用echarts需要一个具备高宽的DOM容器，在js中通过echarts.init(dom元素)初始化得到一个echarts实例，通过setOption()输入描述参数
**系列(series)** 指一组数值以及他们映射成的图，包含的要素至少有：一组数值，图表类型(series.type)，以及其他关于这些数据如何映射成图的参数。
系列类型包括：line(折线图)、bar(柱状图)、pie(饼图)、scatter(散点图)、graph(关系图)、tree(树图)等等。
**component** echarts的各种内容被抽象成组件，echarts至少包含：xAxis(直角坐标系X轴)、yAxis(直角坐标系y轴)、grid(直角坐标系底板)

![echarts 组件]()
<img src="https://gitee.com/mabing__jkl/img/raw/master/components.jpg">
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/6bf7884e8f45f187855e3fc86f390ed88b8a3e0f421f7edc698d5a675b264cb8.jpg)

## KP3116ESG & BPA8505D/BPA8506D对比测试

舒坚富

时间：2023年08月03日

'BPS

晶丰明源

## 内容

➢参考电路原理图  
➢特性参数对比  
➢测试数据对比  
➢性能测试数据  
➢其他事项

## 1.参考电路对比

KP3116ESG参考电路  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/69b4fe7f997846950677233b0e8a11dc45e50fe93d2693b4c0a6470855b816b2.jpg)

## 主要特点

·集成700V高压MOSFET和高压启动电路  
多模式控制、无异音工作  
支持反激、降压和升降压拓扑  
支持超低压输入（>20V）  
空载功耗低于100mW  
支持最高40kHz开关频率  
良好的线性调整率和负载调整率  
集成软启动电路  
内部保护功能：

过载保护（OLP）

逐周期电流限制（OCP）

异常过流保护（AOCP）

输出过压保护（OVP）

过温保护（OTP）

封装类型SOP-8

BPA850XD参考电路  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/0afef151a45a63204c32d9e0a4f6c4c427f6be608e6eaa89c2590b2c0bad0085.jpg)

## 特点

内部集成650V高压MOSFET  
集成高压启动和自供电电路  
低待机功耗<100mW  
优异的动态响应速度，输出电压纹波小  
良好的负载调整率和线性调整率  
降低音频噪声的降幅调制技术  
自适应开关频率，最高45KHz  
改善EMI性能的频率调制技术  
内置软启动功能  
保护功能

输出短路保护（SCP）  
输出过压保护（OVP）  
输出过载保护（OLP）  
反馈开路保护  
逐周期限流（Cycle-by-Cycle）  
退滞过温保护（OTP）

2.电气主要参数对比

<table><tr><td></td><td>KP3116ESG</td><td>BPA8505D</td><td>BPA8506D</td></tr><tr><td>开关频率KHz</td><td>41.6</td><td>45</td><td>45</td></tr><tr><td>Mosfet BV V</td><td>700</td><td>650</td><td>650</td></tr><tr><td>Rds_on Ω</td><td>14</td><td>8.5</td><td>6</td></tr><tr><td>限流点 mA</td><td>500</td><td>440</td><td>700</td></tr><tr><td>软启动</td><td>有</td><td>有</td><td>有</td></tr><tr><td>输出过压保护</td><td>有</td><td>有</td><td>有</td></tr><tr><td>输出短路保护</td><td>有</td><td>有</td><td>有</td></tr><tr><td>输出过载保护</td><td>有</td><td>有</td><td>有</td></tr><tr><td>反馈开路保护</td><td>有</td><td>有</td><td>有</td></tr><tr><td>过温保护</td><td>有</td><td>有</td><td>有</td></tr><tr><td>封装</td><td>SOP-8</td><td>SOP-7</td><td>SOP-7</td></tr></table>

## 3.原理图对比

KP3116ESG 12V 250mA Max

BPA8505D 12V 250mA Max

BPA8506D 12V 400mA Max

<table><tr><td>Vin(Vac)</td><td>Load(%)</td><td>Pin(W)</td><td>Vout(V)</td><td>Iout(A)</td><td>Pout(W)</td><td>Eff(%)</td><td>Ave Eff(%)</td></tr><tr><td rowspan="6">85Vac/60Hz</td><td>100</td><td>4.377</td><td>12.054</td><td>0.2494</td><td>3.006268</td><td>68.68329</td><td rowspan="4">72.9845</td></tr><tr><td>75</td><td>3.106</td><td>12.119</td><td>0.1874</td><td>2.271101</td><td>73.11979</td></tr><tr><td>50</td><td>2.021</td><td>12.165</td><td>0.1249</td><td>1.519409</td><td>75.18102</td></tr><tr><td>25</td><td>1.016</td><td>12.204</td><td>0.0624</td><td>0.76153</td><td>74.9537</td></tr><tr><td>10</td><td>0.4228</td><td>12.237</td><td>0.025</td><td>0.305925</td><td>72.35691</td><td>72.3569</td></tr><tr><td>0</td><td>0.0529</td><td>12.345</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">115Vac/60Hz</td><td>100</td><td>4.078</td><td>12.175</td><td>0.2498</td><td>3.041315</td><td>74.57859</td><td rowspan="4">75.2578</td></tr><tr><td>75</td><td>3.017</td><td>12.229</td><td>0.1874</td><td>2.291715</td><td>75.96005</td></tr><tr><td>50</td><td>2.013</td><td>12.253</td><td>0.1249</td><td>1.5304</td><td>76.02582</td></tr><tr><td>25</td><td>1.027</td><td>12.256</td><td>0.0624</td><td>0.764774</td><td>74.46684</td></tr><tr><td>10</td><td>0.4513</td><td>12.289</td><td>0.025</td><td>0.307225</td><td>68.07556</td><td>68.0756</td></tr><tr><td>0</td><td>0.0624</td><td>12.315</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">230Vac/50Hz</td><td>100</td><td>4.045</td><td>12.079</td><td>0.2498</td><td>3.017334</td><td>74.59417</td><td rowspan="4">72.6478</td></tr><tr><td>75</td><td>3.028</td><td>12.124</td><td>0.1874</td><td>2.272038</td><td>75.03427</td></tr><tr><td>50</td><td>2.069</td><td>12.131</td><td>0.1249</td><td>1.515162</td><td>73.2316</td></tr><tr><td>25</td><td>1.119</td><td>12.146</td><td>0.0624</td><td>0.75791</td><td>67.73105</td></tr><tr><td>10</td><td>0.541</td><td>12.161</td><td>0.025</td><td>0.304025</td><td>56.19686</td><td>56.1969</td></tr><tr><td>0</td><td>0.1305</td><td>12.092</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">264Vac/50Hz</td><td>100</td><td>4.086</td><td>12.06</td><td>0.2498</td><td>3.012588</td><td>73.72952</td><td rowspan="4">71.3752</td></tr><tr><td>75</td><td>3.063</td><td>12.144</td><td>0.1874</td><td>2.275786</td><td>74.29924</td></tr><tr><td>50</td><td>2.109</td><td>12.154</td><td>0.1249</td><td>1.518035</td><td>71.97888</td></tr><tr><td>25</td><td>1.158</td><td>12.154</td><td>0.0624</td><td>0.75841</td><td>65.49306</td></tr><tr><td>10</td><td>0.592</td><td>12.182</td><td>0.025</td><td>0.30455</td><td>51.44426</td><td>51.4443</td></tr><tr><td>0</td><td>0.1589</td><td>12.065</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>备注</td><td colspan="4">系统中有2M泄放电阻&amp;7.5K假负载电阻</td><td></td><td></td><td></td></tr></table>

<table><tr><td>Vin(V ac)</td><td>Load(%)</td><td>Pin(W)</td><td>Vout(V)</td><td>Iout(A)</td><td>Pout(W)</td><td>Eff(%)</td><td>Ave Eff(%)</td></tr><tr><td rowspan="6">85Vac/60Hz</td><td>100</td><td>4.165</td><td>12.079</td><td>0.2498</td><td>3.017334</td><td>72.445</td><td rowspan="4">74.3333</td></tr><tr><td>75</td><td>3.039</td><td>12.093</td><td>0.1874</td><td>2.266228</td><td>74.57151</td></tr><tr><td>50</td><td>1.998</td><td>12.099</td><td>0.1249</td><td>1.511165</td><td>75.63389</td></tr><tr><td>25</td><td>1.013</td><td>12.124</td><td>0.0624</td><td>0.756538</td><td>74.68288</td></tr><tr><td>10</td><td>0.4503</td><td>12.284</td><td>0.025</td><td>0.3071</td><td>68.19898</td><td>68.199</td></tr><tr><td>0</td><td>0.0947</td><td>12.724</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">115Vac/60Hz</td><td>100</td><td>3.951</td><td>12.084</td><td>0.2498</td><td>3.018583</td><td>76.40049</td><td rowspan="4">75.9461</td></tr><tr><td>75</td><td>2.947</td><td>12.093</td><td>0.1874</td><td>2.266228</td><td>76.8995</td></tr><tr><td>50</td><td>1.978</td><td>12.101</td><td>0.1249</td><td>1.511415</td><td>76.41127</td></tr><tr><td>25</td><td>1.021</td><td>12.12</td><td>0.0624</td><td>0.756288</td><td>74.07326</td></tr><tr><td>10</td><td>0.464</td><td>12.273</td><td>0.025</td><td>0.306825</td><td>66.12608</td><td>66.1261</td></tr><tr><td>0</td><td>0.1092</td><td>12.719</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">230Vac/50Hz</td><td>100</td><td>3.962</td><td>12.078</td><td>0.2498</td><td>3.017084</td><td>76.15054</td><td rowspan="4">73.216</td></tr><tr><td>75</td><td>2.986</td><td>12.088</td><td>0.1874</td><td>2.265291</td><td>75.86374</td></tr><tr><td>50</td><td>2.051</td><td>12.081</td><td>0.1249</td><td>1.508917</td><td>73.56981</td></tr><tr><td>25</td><td>1.124</td><td>12.119</td><td>0.0624</td><td>0.756226</td><td>67.27986</td></tr><tr><td>10</td><td>0.552</td><td>12.246</td><td>0.025</td><td>0.30615</td><td>55.46196</td><td>55.462</td></tr><tr><td>0</td><td>0.1722</td><td>12.736</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">264Vac/50Hz</td><td>100</td><td>3.995</td><td>12.079</td><td>0.2498</td><td>3.017334</td><td>75.52776</td><td rowspan="4">71.8537</td></tr><tr><td>75</td><td>3.027</td><td>12.083</td><td>0.1874</td><td>2.264354</td><td>74.80523</td></tr><tr><td>50</td><td>2.096</td><td>12.083</td><td>0.1249</td><td>1.509167</td><td>72.00223</td></tr><tr><td>25</td><td>1.162</td><td>12.119</td><td>0.0624</td><td>0.756226</td><td>65.07966</td></tr><tr><td>10</td><td>0.585</td><td>12.234</td><td>0.025</td><td>0.30585</td><td>52.28205</td><td>52.2821</td></tr><tr><td>0</td><td>0.2064</td><td>12.745</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>备注</td><td colspan="4">系统中有2M泄放电阻&amp;6.8K假负载电阻</td><td></td><td></td><td></td></tr></table>

<table><tr><td>Vin(Vac)</td><td>Load(%)</td><td>Pin(W)</td><td>Vout(V)</td><td>Iout(A)</td><td>Pout(W)</td><td>Eff(%)</td><td>Ave Eff(%)</td></tr><tr><td rowspan="6">85Vac/60Hz</td><td>100</td><td>6.938</td><td>12.196</td><td>0.3997</td><td>4.874741</td><td>70.26148</td><td rowspan="4">74.469</td></tr><tr><td>75</td><td>4.919</td><td>12.229</td><td>0.2997</td><td>3.665031</td><td>74.50765</td></tr><tr><td>50</td><td>3.206</td><td>12.221</td><td>0.1999</td><td>2.442978</td><td>76.20018</td></tr><tr><td>25</td><td>1.588</td><td>12.225</td><td>0.0999</td><td>1.221278</td><td>76.90664</td></tr><tr><td>10</td><td>0.6692</td><td>12.269</td><td>0.04</td><td>0.49076</td><td>73.33533</td><td>73.3353</td></tr><tr><td>0</td><td>0.0696</td><td>12.591</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">115Vac/60Hz</td><td>100</td><td>6.363</td><td>12.174</td><td>0.3997</td><td>4.865948</td><td>76.47254</td><td rowspan="4">77.2923</td></tr><tr><td>75</td><td>4.719</td><td>12.224</td><td>0.2997</td><td>3.663533</td><td>77.63367</td></tr><tr><td>50</td><td>3.131</td><td>12.215</td><td>0.1999</td><td>2.441779</td><td>77.98718</td></tr><tr><td>25</td><td>1.584</td><td>12.221</td><td>0.0999</td><td>1.220878</td><td>77.07563</td></tr><tr><td>10</td><td>0.6824</td><td>12.264</td><td>0.04</td><td>0.49056</td><td>71.88746</td><td>71.8875</td></tr><tr><td>0</td><td>0.0834</td><td>12.591</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">230Vac/50Hz</td><td>100</td><td>6.269</td><td>12.165</td><td>0.3997</td><td>4.862351</td><td>77.56182</td><td rowspan="4">76.2768</td></tr><tr><td>75</td><td>4.682</td><td>12.204</td><td>0.2997</td><td>3.657539</td><td>78.11915</td></tr><tr><td>50</td><td>3.169</td><td>12.199</td><td>0.1998</td><td>2.43736</td><td>76.9126</td></tr><tr><td>25</td><td>1.682</td><td>12.209</td><td>0.0999</td><td>1.219679</td><td>72.51362</td></tr><tr><td>10</td><td>0.778</td><td>12.251</td><td>0.04</td><td>0.49004</td><td>62.98715</td><td>62.9871</td></tr><tr><td>0</td><td>0.157</td><td>12.594</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="6">264Vac/50Hz</td><td>100</td><td>6.295</td><td>12.165</td><td>0.3997</td><td>4.862351</td><td>77.24147</td><td rowspan="4">75.3933</td></tr><tr><td>75</td><td>4.711</td><td>12.2</td><td>0.2997</td><td>3.65634</td><td>77.61282</td></tr><tr><td>50</td><td>3.219</td><td>12.194</td><td>0.1999</td><td>2.437581</td><td>75.72478</td></tr><tr><td>25</td><td>1.718</td><td>12.209</td><td>0.0999</td><td>1.219679</td><td>70.99413</td></tr><tr><td>10</td><td>0.816</td><td>12.246</td><td>0.04</td><td>0.48984</td><td>60.02941</td><td>60.0294</td></tr><tr><td>0</td><td>0.182</td><td>12.601</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>备注</td><td colspan="4">系统中有2M泄放电阻&amp;6.8K假负载电阻</td><td></td><td></td><td></td></tr></table>

<table><tr><td>Vin(Vac) Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>264</td><td>平均值</td><td>线电压调整率</td></tr><tr><td>0</td><td>12.345</td><td>12.315</td><td>12.259</td><td>12.186</td><td>12.092</td><td>12.065</td><td>12.2103333</td><td>2.29%</td></tr><tr><td>10%</td><td>12.237</td><td>12.289</td><td>12.232</td><td>12.216</td><td>12.161</td><td>12.182</td><td>12.2195</td><td>1.05%</td></tr><tr><td>20%</td><td>12.197</td><td>12.186</td><td>12.175</td><td>12.156</td><td>12.135</td><td>12.115</td><td>12.1606667</td><td>0.67%</td></tr><tr><td>40%</td><td>12.162</td><td>12.168</td><td>12.169</td><td>12.156</td><td>12.145</td><td>12.131</td><td>12.1551667</td><td>0.31%</td></tr><tr><td>60%</td><td>12.141</td><td>12.138</td><td>12.131</td><td>12.111</td><td>12.094</td><td>12.078</td><td>12.1155</td><td>0.52%</td></tr><tr><td>80%</td><td>12.052</td><td>12.093</td><td>12.102</td><td>12.094</td><td>12.079</td><td>12.061</td><td>12.0801667</td><td>0.41%</td></tr><tr><td>100%</td><td>11.964</td><td>12.047</td><td>12.045</td><td>12.032</td><td>11.998</td><td>11.978</td><td>12.0106667</td><td>0.69%</td></tr><tr><td>平均值</td><td>12.1568571</td><td>12.1765714</td><td>12.159</td><td>12.1358571</td><td>12.1005714</td><td>12.0871429</td><td></td><td></td></tr><tr><td>负载调整率</td><td>3.13%</td><td>2.20%</td><td>1.76%</td><td>1.52%</td><td>1.35%</td><td>1.69%</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

<table><tr><td>Vin(Vac) Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>264</td><td>平均值</td><td>线电压调整率</td></tr><tr><td>0</td><td>12.724</td><td>12.719</td><td>12.703</td><td>12.714</td><td>12.736</td><td>12.745</td><td>12.7235</td><td>0.33%</td></tr><tr><td>10%</td><td>12.284</td><td>12.273</td><td>12.234</td><td>12.231</td><td>12.246</td><td>12.234</td><td>12.2503333</td><td>0.43%</td></tr><tr><td>20%</td><td>12.13</td><td>12.128</td><td>12.126</td><td>12.12</td><td>12.129</td><td>12.124</td><td>12.1261667</td><td>0.08%</td></tr><tr><td>40%</td><td>12.099</td><td>12.098</td><td>12.095</td><td>12.094</td><td>12.111</td><td>12.106</td><td>12.1005</td><td>0.14%</td></tr><tr><td>60%</td><td>12.093</td><td>12.094</td><td>12.093</td><td>12.09</td><td>12.086</td><td>12.083</td><td>12.0898333</td><td>0.09%</td></tr><tr><td>80%</td><td>12.091</td><td>12.091</td><td>12.093</td><td>12.09</td><td>12.083</td><td>12.084</td><td>12.0886667</td><td>0.08%</td></tr><tr><td>100%</td><td>12.079</td><td>12.084</td><td>12.09</td><td>12.089</td><td>12.078</td><td>12.079</td><td>12.0831667</td><td>0.10%</td></tr><tr><td>平均值</td><td>12.2142857</td><td>12.2124286</td><td>12.2048571</td><td>12.204</td><td>12.2098571</td><td>12.2078571</td><td></td><td></td></tr><tr><td>负载调整率</td><td>5.28%</td><td>5.20%</td><td>5.02%</td><td>5.12%</td><td>5.39%</td><td>5.46%</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

<table><tr><td>Vin(Vac)Load(%)</td><td>85</td><td>115</td><td>132</td><td>176</td><td>230</td><td>264</td><td>平均值</td><td>线电压调整率</td></tr><tr><td>0</td><td>12.591</td><td>12.591</td><td>12.581</td><td>12.581</td><td>12.594</td><td>12.601</td><td>12.58983</td><td>0.16%</td></tr><tr><td>10%</td><td>12.269</td><td>12.264</td><td>12.259</td><td>12.256</td><td>12.251</td><td>12.246</td><td>12.2575</td><td>0.19%</td></tr><tr><td>20%</td><td>12.24</td><td>12.234</td><td>12.231</td><td>12.226</td><td>12.22</td><td>12.219</td><td>12.22833</td><td>0.17%</td></tr><tr><td>40%</td><td>12.228</td><td>12.224</td><td>12.219</td><td>12.214</td><td>12.209</td><td>12.203</td><td>12.21617</td><td>0.20%</td></tr><tr><td>60%</td><td>12.234</td><td>12.229</td><td>12.228</td><td>12.219</td><td>12.213</td><td>12.21</td><td>12.22217</td><td>0.20%</td></tr><tr><td>80%</td><td>12.238</td><td>12.236</td><td>12.234</td><td>12.225</td><td>12.219</td><td>12.216</td><td>12.228</td><td>0.18%</td></tr><tr><td>100%</td><td>12.196</td><td>12.174</td><td>12.183</td><td>12.176</td><td>12.165</td><td>12.165</td><td>12.1765</td><td>0.25%</td></tr><tr><td>平均值</td><td>12.28514</td><td>12.27886</td><td>12.27643</td><td>12.271</td><td>12.26729</td><td>12.26571</td><td></td><td></td></tr><tr><td>负载调整率</td><td>3.22%</td><td>3.40%</td><td>3.24%</td><td>3.30%</td><td>3.50%</td><td>3.55%</td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

计算方法

调整率=100%（最大值-最小值)/平均值

测试条件备注

实际有加7.5K假负载电阻

计算方法

调整率=100%（最大值-最小值)/平均值

测试条件备注

实际有加6.8K假负载电阻

计算方法

调整率=100%（最大值-最小值)/平均值

测试条件备注

实际有加6.8K假负载电阻

<table><tr><td colspan="2">输入电压V\输出电流A</td><td>KP3116ESG</td><td>BPA8505D</td><td>BPA8506D</td></tr><tr><td rowspan="7">60Hz</td><td>85</td><td>0.303</td><td>0.393</td><td>0.623</td></tr><tr><td>90</td><td>0.324</td><td>0.394</td><td>0.623</td></tr><tr><td>100</td><td>0.366</td><td>0.394</td><td>0.625</td></tr><tr><td>115</td><td>0.363</td><td>0.395</td><td>0.627</td></tr><tr><td>120</td><td>0.364</td><td>0.395</td><td>0.629</td></tr><tr><td>127</td><td>0.365</td><td>0.396</td><td>0.63</td></tr><tr><td>132</td><td>0.365</td><td>0.396</td><td>0.631</td></tr><tr><td rowspan="9">50Hz</td><td>165</td><td>0.366</td><td>0.399</td><td>0.637</td></tr><tr><td>175</td><td>0.371</td><td>0.399</td><td>0.639</td></tr><tr><td>185</td><td>0.372</td><td>0.399</td><td>0.641</td></tr><tr><td>200</td><td>0.373</td><td>0.4</td><td>0.642</td></tr><tr><td>220</td><td>0.377</td><td>0.4</td><td>0.649</td></tr><tr><td>230</td><td>0.379</td><td>0.405</td><td>0.654</td></tr><tr><td>240</td><td>0.38</td><td>0.405</td><td>0.654</td></tr><tr><td>254</td><td>0.383</td><td>0.407</td><td>0.654</td></tr><tr><td>264</td><td>0.385</td><td>0.409</td><td>0.654</td></tr></table>

KP3116ESG  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/52f4c7e3fbdf49bb7c5af3c189b0da23699f0515fe037f8bf4d5aab440e8c784.jpg)

85Vac 60Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$

Rise Time 34.184ms

Test Condition:

➢ 250mA Load

BPA8505D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/563aeb26f9d055d6e2aa32f2aba05b590fa416fb98fdafedfd5141b7273ae7b3.jpg)

85Vac 60Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$

Rise Time 35.432ms

Test Condition:

➢ 250mA Load

BPA8506D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/37de99e3244ea754dca51a6fbe1a695d82814e7861091bc98741303bba3226ce.jpg)

85Vac 60Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$

Rise Time 50.752ms

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/a64887ffa4283a2eaf4fd1afb539216f64ded1bc0d362837a19c218b0b0e1234.jpg)

264Vac 50Hz

CH1 VOUT

Rise Time 28.472ms

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/cf91d0927df33cf2f49b6b5ca6c0ead1a6bb66b6fe9bb270b3bf0084cf72610e.jpg)

264Vac 50Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$

Rise Time 34.016ms

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/3ae50520787731a79d7e549147d5ec8229a878824ab34570cfb4a1ec70b2dd78.jpg)

264Vac 50Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$

Rise Time 48.592ms

Test Condition:

400mA Load

KP3116ESG  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/20e6ee44d5a6a6eb00dcbcabcfd75a3e818ae52161382a215f1af815a8240031.jpg)

## 85Vac 60Hz

CH1 VOUT Vpk91mV

Test Condition:

➢ 250mA Load

BPA8505D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/8eef5f909f646df55c2b0987b6ab779402973b7e6ba10479a9b152a534914559.jpg)

## 85Vac 60Hz

CH1 VOUT Vpk105mV

Test Condition:

➢ 250mA Load

BPA8506D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/6973fac77eba95526834b88eebe3faed1f6f631eb8ca65950a3a856b9af1666a.jpg)

## 85Vac 60Hz

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Vpk200mV

Test Condition:

400mA Load

KP3116ESG  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/9217d7ddc87928d5d21350aeea40578a81c5b90e8a345550ed21d15504e1596e.jpg)

## 264Vac 50Hz

CH1 VOUT Vpk128mV

Test Condition: ➢ 250mA Load

BPA8505D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/776aa10fe1b42959bad5b7a3b3ec8e7b17fb34b3e665c6e26cc7e3337c1f4df9.jpg)

## 264Vac 50Hz

CH1 VOUT Vpk118mV

Test Condition:

➢ 250mA Load

BPA8506D  
![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/1ddcbc553dc3d69a184bfb3abf387a0bd31664353f58de2407e9482bab5fe27d.jpg)

## 264Vac 50Hz

CH1 $\mathsf { V } _ { \mathsf { O U T } }$ Vpk160mV

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/f7ee4b7905f8081648651431ee46e9d9b00b5c08ae99f9942c9122e4a240b1ca.jpg)

85Vac 60Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk600mV

${ \mathsf { C H 3 } } \mathsf { I _ { 0 \cup \intercal } }$ 125mA 5ms 250mA 5ms

Test Condition:

➢ 125mA-250mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/98a7c770ee33f1d46c5237d784f437ee1fc77e6579d33c5fa0d735862d93b13c.jpg)

85Vac 60Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk183mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 125mA 5ms 250mA 5ms  
Test Condition:  
➢ $1 2 5 \mathsf { m A } { - } 2 5 0 \mathsf { m A } 1 0 0 \mathsf { H z }$ Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/980e1259db573e9a51e5c4c42ef1ed8080a73b46508e5076dd1335c3db88bc2a.jpg)

85Vac 60Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ Vpk260mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 200mA 5ms 400mA 5ms  
Test Condition:

200mA-400mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/61c6bb92f2e11e937230f7f3afaebad07e76a392e1143151a09a87e0ced02ec8.jpg)

264Vac 50Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk480mV

$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 125mA 5ms 250mA 5ms

Test Condition:

➢ 125mA-250mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/2c4d3b1e02f2c684d3bf0f893d5737319bf168e17a4d79bf27146e8b66a49a9b.jpg)

264Vac 50Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk220mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 125mA 5ms 250mA 5ms  
Test Condition:  
➢ $1 2 5 \mathsf { m A } { - } 2 5 0 \mathsf { m A } 1 0 0 \mathsf { H z }$ Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/c49b86a875fb6aa3e2ae109e2da4525a667d515ca1a06841d144146967ebb1bd.jpg)

264Vac 50Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ $\mathsf { V p k 2 4 0 m V }$  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 200mA 5ms 400mA 5ms  
Test Condition:

200mA-400mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/518c8ba941a10076a2c73a93543f0c6b2309445e6e854424764b63da5fd99984.jpg)

85Vac 60Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk660mV

$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 25mA 5ms 225mA 5ms

Test Condition:

➢ 25mA-225mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/3cc125a0e9249d6443362fec8d67ab55abf439ddcef5693dda55b161ccc97c22.jpg)

85Vac 60Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk303mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 25mA 5ms 225mA 5ms  
Test Condition:  
➢ 25mA-225mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/9cd4851eee00b636a9ddc92db903ccbc193902d5ee9c0c121de26b2d0cd304ad.jpg)

85Vac 60Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ Vpk360mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 40mA 5ms 360mA 5ms  
Test Condition:

40mA-360mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/62b6772c2b6edce44f3f076f69106f42c65ac1e7c023473a00740cc97cc4eb51.jpg)

264Vac 50Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk640mV

$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 25mA 5ms 225mA 5ms

Test Condition:

➢ 25mA-225mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/1adbdac83455c850da28434928ab2895a1743812b32e9dbd6fb5220b370869fa.jpg)

264Vac 50Hz

CH1 VOUT ${ \mathsf { C H 1 } } { \mathsf { V } } _ { \mathsf { O U T } }$ Vpk344mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 25mA 5ms 225mA 5ms  
Test Condition:  
➢ $2 5 m A - 2 2 5 m A 1 0 0 H z$ Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/5eb8784f8ce103a2d13a37446f37cea4171c94694711a282cb13c197b969f2b6.jpg)

264Vac 50Hz

CH1 VOUT $\mathsf { V } _ { \mathsf { O U T } }$ Vpk400mV  
$C H 3 \mathsf { I } _ { 0 \mathsf { U T } }$ 40mA 5ms 360mA 5ms  
Test Condition:

40mA-360mA 100Hz Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/1eab054546367bf4d81b1c21f7180200c8d305b224b5a877a3b4e2531d4ce03a.jpg)

85Vac 60Hz

CH3IDS Max 453mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 125V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/44ab2fa94742d35aee244cffbe9a025b678cfffb2590e617da78456ab4e13615.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 470mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 122V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/4f356fa59d389ba02bc1f81cac573d9b487ecef49dc0f9db5d78128cd11535fe.jpg)

85Vac 60Hz

CH3IDS Max 760mA  
CH4VDS $1 4 \mathsf { V } _ { \mathsf { D S } }$ Vmax 121V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/6b41877fdc34cf25c785363225010119ed0aa827ee0a99b85bb62e7164d207a3.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 464mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 384V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/5e53c59dd1681c3ad1d1486ca9fa541ba338c12dfbb1f6dc053cf1ac10c26402.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 500mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 380V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/26500ac6b527c20ef7c2f8477e6bedbb94e202cbdef15e486363f9263411cbcf.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 800mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 384V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/e438613ae0e472e2a01d23b26f5a8c300a1ce2b298afd5788894e2521e0960ab.jpg)

85Vac 60Hz

CH3IDS Max 681mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 130V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/3ad9f7ae92074c18b1d14008f0f02c9ac279b296461d798e42ef1ed7a8fd2b97.jpg)

85Vac 60Hz

CH3IDS Max 880mA  
CH4VDS Vmax 126V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/d254b15bb7e3ea7edd02975733d97c8028908037c91c6fa194afd421d3085a53.jpg)

85Vac 60Hz

CH3IDS Max 1.45A  
CH4VDS Vmax 124V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/dce19771242dfb9dcbd783df080e6c1b25bb7f0f54fd692b79b18c87f747032f.jpg)

264Vac 50Hz

CH3IDS Max 800mA  
$C H 4 V _ { \mathrm { D S } }$ Vmax 400V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/bf1b53bc3ce0cad0c96b62c52561d918b2e58c931a9222ba3af51c9bc4170bec.jpg)

264Vac 50Hz

CH3IDS Max 980mA  
CH4VDS Vmax 390V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/c20ca53f9c684c88254f883242dbb1aa01934610297d358dfc43cf35f8528214.jpg)

264Vac 50Hz

CH3IDS Max 1.55A  
CH4VDS Vmax 380V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/7f6d820ceca12d64346b0a3c8b85f16a720845e45955ef9afefec3d084013a1e.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 700mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 124V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/e5d642e844a19d3815712de96c79d683c6a41357e0079ca7f1f152325e03f4c2.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 880mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 126V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/e4acaf1a0a5e3205bf0bc9497c0fd2d4b9ef3670bdd29013d7a2c031d980311e.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 1.48A  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 124V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/8f154eae2b45cad5672d2faa4f72ed8e2337ed5a57772b66c42c0e74426dcb7e.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 860mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 380V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/f54455516a1c136ad6618d04d71b2a30141512c56723bc5e9872d2e6bd0f22b5.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 940mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 382V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/c62ee2eb0cc730e2a93ebde36e04c5ee97b282a1de8bfcd7023a87fa6e052f49.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 1.56A  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 380V

Test Condition:

➢ OCP

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/8be52893d2ebe556d9d104d16d7f96285050d05bc4dcf5008f73ee9124a0e76f.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 740mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 126V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/298ca88af51a9205be73d145f1c855d2dbe614cc0f52a1270f2e1b6d218faa01.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 910mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 127V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/95995161a71b0a0b172c8677f38bc732925b917639dedd822e64f249bee7f491.jpg)

85Vac 60Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 1.49A  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 124V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/711010b2c2881dfec6e8b9712786c666c74475ee158027187717ffee103dfdd1.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 960mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 381V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/d13b121ad169e9884b67c89c516b6ceede22c658fa50065ac9486bbf08003ab6.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 1030mA  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 380V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/aeabec96f993d790f884af055d69e6cd23e81dc5b6b08d710d501cad47d8a0c5.jpg)

264Vac 50Hz

$C H 3 \vert _ { \mathsf { D S } }$ Max 1.68A  
CH4VDS $C H 4 V _ { \mathrm { D S } }$ Vmax 378V

Test Condition:

输出短路

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/921f1cd18f694fc4a2aded613a7c8d67fd6a06cd8a95bc51408ca93068a04617.jpg)

85Vac 60Hz

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/02dc1fa31692cd86ebe20dc25af7a912dca16a20e3de9fa44eda5058f76f72eb.jpg)

85Vac 60Hz

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/405c5e40e1c9fe169587055de5379befa0be60df9fd0984c67cdfe0ea666dcc3.jpg)

85Vac 60Hz

CH3IL Max 483mA

CH3IL Max 519mA

CH3IL Max 800mA

Test Condition: ➢ 250mA Load

Test Condition: ➢ 250mA Load

Test Condition: 400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/4e1bd51f8308fad77638708f98147a2ef99403fc4b0b36ea8adad67e4b6f4640.jpg)

264Vac 50Hz

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/11eb95043446ed32d21ef858aeb5383671f26b21ce7a52a710c764c27d1034c2.jpg)

264Vac 50Hz

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/540cd71122d5202693c6ac769a669daad060f4fcb3ac6a56667bdb33896537cb.jpg)

264Vac 50Hz

CH3IL Max 499mA

CH3IL Max 537mA

CH3IL Max 900mA

Test Condition: ➢ 250mA Load

Test Condition: ➢ 250mA Load

Test Condition: 400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/762b0846dfc540f6a00d6dc1f356af450a2641e01b0aad782c53f345b012aebe.jpg)

85Vac 60Hz

CH3IL Max 524mA  
CH4Vds Max 126V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/3655dab638e816dc8182810dae3be3a59a3c15e2e5575649bfe58e4239473c28.jpg)

85Vac 60Hz

CH3IL Max 519mA  
CH4Vds Max 118V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/3a6dc95e2566659c83cdf5fe4a9a911159270a5c8b816385437d82d559f9a75b.jpg)

85Vac 60Hz

CH3IL Max 810mA  
CH4Vds Max 124V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/98cc83a3f34f4eff2693b045d7b620d4aabbcb8d0474317d0771c62ae5c4f395.jpg)

264Vac 50Hz

CH3IL Max 608mA  
CH4Vds Max 382V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/a09f5555f79a6de92d4a9ca80c75c7bd7cfe0f23b9f3330d6c5602ff7a5f8048.jpg)

264Vac 50Hz

CH3IL Max 622mA  
CH4Vds Max 370V

Test Condition:

➢ 250mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/09ac2f78746be67050262c22939a795f5f82b4f30e9d6e7e5d8bef7e09d722da.jpg)

264Vac 50Hz

CH3IL Max 900mA  
CH4Vds Max 380V

Test Condition:

400mA Load

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/9c2bf343f4f3d87d826a8ee097865ac02e6cb63f6e25c3086751f5dd1c97826f.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/c8eb9a5b09b5ec35a7ae9a09c7559b4e168bdc470beb0b67ba8f1b06b7d46c87.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/8cbb8ea011fea0d75d4164d0376f7cff7268d0ed5a914af59928fd11461723be.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/1f5450bd0e7e61e746cd50ce9d79e6f47ded2db4c290fbadbf091855c95ca7f6.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/2153f245a1277af60fcc05f236e07c8a18580703bb14c1317dece3f715d0c0aa.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/49463120f3c7754653294a2f8a459ca20c63a3aa4ce6f713683900aa1c5c9459.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/25aa88c09653cbafbbdf779107b10f8fde34958f9457418308e8422c1a4a37fc.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/2997f0824157d14d5f7e65bfdfd82fcaa3b39392f7f9be92b8709871aac0e0f3.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/c40eebab1e85efe3edb718aa5cf89a071d64e08c41e6d2e306e28f1d679a95bf.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/460506eb0820fb57aad0ac95deb66e11517457a60318a2a90ef6bd654c6abf95.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/f5219f3eeacb873fb8f47e7df7ae82fda4d25f5e27d87303c3b132c3c0a7131f.jpg)

![](./素材/images/KP3116ESG_&_BPA8505DBPA8506D对比测试_舒坚富/9f204ca3a1ff4ecf4ea26c44163aa38e608f7d07f2047ea6beceaee36179eef7.jpg)

## 注意事项：

1.续流二极管&取样二极管压降差较大时会直接影响输出电压精度,续流二极管ES1J因不同品牌压降差异极大建议调整为ES2J或限定品牌ES1J。  
2.12V/400mA R2电阻测试报告为12.8K +/-1%精度0603取样电阻,反馈滤波电解为22uF/50V。12V/250mA R2电阻测试报告为12.8K +/-1%精度0603取样电阻,反馈滤波电容为10uF/50V 0805 X7R或10uF/50V电解。  
3.若要求输入85-265V交流，输出12V 400mA则输入电解电容需将4.7uF/450V两颗调整为6.8uF/450V。  
4.12V400mA对储能电感要求饱和电流>900mA.考量效率&饱和应力实际测试电感为R9\*12 680uH+/-10%, 0.29mm130T。12V250mA储能电感要求饱和电流>650mA.实际测试电感为R9\*12 1.2mH+/-10% 0.27mm 172T。  
5.BPA8505/6 满载时效率高于KP3116ESG芯片改善双85温升有帮助，动态响应纹波优于交流反馈，负载调整率精度稍低于KP3116ESG。

## THANK YOU FOR WATCHING

import "./detail_v.scss";
import "../_details_type.scss";
import IconFont from "../../../../comsmine/icon_font";
import ViewMore from "../more_detail/view_more";
import VideoImg from "../../../../assets/images/video.png";
import TestImg from "../../../../assets/images/test.png";
import NextReport from "../next_detail/next";
import SourceMap from "../source_map/source";
const VideoDetail = () => {
  return (
    <div className="video-detail">
      <div className="video-source-box">
        <img src={VideoImg} alt="" />
        <div className="play-btn">
          <IconFont className="iconfont" type="icon-bofang" />
        </div>
      </div>
      <div className="video-detail-inner">
        {/* 视频内容 */}
        <div className="video-msg">
          <div style={{ padding: "0 40px" }}>
            <p className="detail-type">写作</p>
            <p className="detail-title">
              Coinbase公布21年Q4财报：收入创新高并达到24.9亿美元
              月活用户达1140万
            </p>
            {/* 作者信息 */}
            <div className="author-msg">
              <div className="author-box">
                <p>
                  作者：
                  <span>蔡国庆</span>
                  <i className="box-point"></i>
                  1天前
                </p>
              </div>
              <div className="msg-box">
                <IconFont className="iconfont" type="icon-shijian" />
                <p>阅读时间：4分钟</p>
              </div>
            </div>
            {/* 联系方式 */}
            <SourceMap />
            <div className="book-body">
              <p>
                18 个月前，以太坊是唯一重要的第 1 层资产分类账。今天，在第 1
                层——以太坊、Solana、Luna、Polygon、Celo、Flow、Avalanche、Near、Fantom、BNB
                链和第 2 层——Optimism、Arbitrum、StarkEx、StarkNet
                中有十几个主要资产分类账。
                我们生活在一个多极世界。我们永远不会回到单极世界。这意味着桥接将非常重要。
                今天我很高兴地宣布我们在零层，一种全链互操作性协议，将 dapps
                和跨不同区块链的流动性结合起来。我们带领他们前一轮2021 年 9
                月，并再次投资于 LayerZero 今天宣布的一轮：1.35 亿美元的 A+
                轮融资，其中包括强大的战略投资者群体，包括 a16z
                crypto、红杉、FTX、Paypal Ventures、Animoca、Rene Marcelo
                Claure（软银首席执行官） 、暴雪（Avalanche
                的生态系统基金）、Polygon 的生态系统基金、Fantom
                的生态系统基金、Dapper Labs、Kronos Research、Ethernity、ImToken
                Ventures、Matrixport、Coinbase、Gemini
                等。这一轮还包括值得注意的天使，如汤姆布拉迪、贾斯汀汀布莱克和玛丽亚艾特尔。
                桥梁是加密技术中技术最复杂的领域之一。1kx 的 Dmitriy Berenzon
                写了一篇杰出的概述桥梁的设计空间。
                我们相信，每对资产账本中的桥梁都会表现出极强的网络效应。用户在以太坊上处理
                renBTC vs tBTC vs WBTC，或 Solana 上的 WormholeETH vs SolletETH
                非常令人困惑。从长远来看，我们预计每对资产分类账的流动性将由一个单一的桥梁主导。
                鉴于大多数资产账本团队都在构建自己的桥梁——Optimism 桥、Arbitrum
                桥、Starknet 桥、Avalanche 桥、Polygon 桥、Near 的 Rainbow
                桥等——我们预计这些桥将成为各自生态系统的主导桥。LayerZero
                并没有直接与这些桥梁中的任何一个竞争，而是在所有这些桥梁之上很好地分层。
                LayerZero 是在链之间中继消息的最简单、最轻便的方式。LayerZero
                不直接管理资产托管和挂钩代币的创建/销毁。相反，LayerZero
                让上面的专用桥接处理这些活动。 除了 LayerZero
                协议之外，LayerZero 团队正在推出一个名为星门它建立在 LayerZero
                协议之上。Stargate 的一个简单心智模型是跨链、stableswap
                DEX，类似于 Curve 或 Saber。如果用户想将 USDC 从 Arbitrum 移动到
                Optimism 或从 Polygon 移动到 Aurora (Near)，现在他们可以使用
                Stargate。 星际之门如何运作？ 当发送链上的 Stargate 合约收到
                USDC 时，LayerZero 协议会将发送链的状态传递给接收链，接收链上的
                Stargate 合约会将 USDC 释放给用户。
                这种方法的美妙之处在于它的灵活性和简单性。流动性自然会成对地聚集到池中（因此不会出现多个池竞争同一个接受者流量的情况）。Stargate
                提供即时保证的最终确定性并且信任最小化。 虽然 Stargate 是基于
                LayerZero 协议的旗舰应用程序，但我们希望 LayerZero
                协议能够支持各种新的工作流程。因为 LayerZero
                是一种通用的消息中继服务，所以它几乎可以用于任何事情。一些例子：
                使用链 B 上的资产为链 A 上的治理提案投票，而不将资产移回链 A
                使用链 A 上的抵押品在链 B 上贷款 使用链 A 上的抵押品来抵押链 B
                上的衍生品头寸 基于链 B 上的链上动作，对链 A 上的 NFT 应用突变
                LayerZero 是居住今天在大多数主要 EVM 链上：Ethereum Layer
                1、Optimism、Arbitrum、Polygon、Avalanche、Fantom 和 BNB
                链。此外，LayerZero 将在未来几个月内推出对 Celo、Aurora
                (Near)、Solana、Cosmos 和 Terra 的支持。 您可以访问 LayerZero
                文档这里. 如果你想帮助实现一个多链世界，LayerZero
                团队正在积极进取招聘. 披露： Multicoin
                已建立、维护和执行合理设计的书面政策和程序，以识别和有效管理与其投资活动相关的利益冲突。有关更重要的披露，请参阅可用的披露和使用条款这里.
              </p>
            </div>
          </div>
          {/* 分割线 */}
          <div className="per-line"></div>
          <ViewMore />
        </div>
        {/* 参与者 */}
        <div className="par-box">
          <p className="par-title">参与者</p>
          <p className="per-line"></p>
          {/* 参与者列表 */}
          <div className="par-people">
            <ul>
              <li>
                <div className="people-av">
                  <img src={TestImg} alt="" />
                </div>
                <div className="img-name">
                  <p>蔡国庆</p>
                  <p>
                    <IconFont className="iconfont" type="icon-tuite" />
                    @gcoremoby
                  </p>
                </div>
              </li>
              <li>
                <div className="people-av">
                  <img src={TestImg} alt="" />
                </div>
                <div className="img-name">
                  <p>周杰伦</p>
                  <p>
                    <IconFont className="iconfont" type="icon-tuite" />
                    @jaychow
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* 分割线 */}
          <p className="per-line"></p>
          {/* 查看下一篇 */}
          <NextReport MediaType={4} NextTitle="查看下一篇"/>
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;

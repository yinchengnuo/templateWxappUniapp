<template>
	<Page :classList="['bg-gradual-blue-light']" ref="Page">
		<view class="index text-black text-black text-lg" style=" overflow: auto;">
			<view class="bg-white padding-xs margin-sm align-center radius-df">
				<view class="padding-xs" style="text-indent: 2em;">
					ToolBox AI 基于 uni-ai 开发。聚合了国内外各种流行的 AI 能力，其中大语言模型 LLM（全称为Large Language Models，指大语言模型）
					包括科大讯飞、微软、百度文心一言、MiniMax等。图形能力（AI
					绘画）正在开发中，敬请期待。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					ToolBox AI 对话功能提供了切换模型功能，同时支持连续对话设置及语音播放。
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue">关于生成式AI</text>
					</view>
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					现阶段的 AI，被称之为 AIGC，即生成式 AI 。我们需要了解它擅长和不擅长的地方，从而对更好的使用 AI。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					AI 是模糊的、概率的，不是精确的，不要问生成式 AI 数学题。从本质来讲，生成式 AI 不是在回答问题，而是在通过前文预测下文。你的前文可以恰好是一个问题，也可以不是问题。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					AI 会推理出很多下文并打分，选择最高分的下文返回给你。但【不知道】这个下文的打分往往不如其他胡诌的下文得分高，所以你很少会遇到 AI 的下文是【不知道】。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					AI 会使用互联网上的数据进行学习训练，但训练语料不会包含最新的知识和互联网上未公开的知识。比如open AI
					的训练数据是2021年9月以前的数据。国产大模型的训练数据相对较新但仍不是实时的，比如昨天的新闻或者热梗。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					虽然 AI 学习了互联网的知识，但它不是复读机，它把知识压缩形成自己的理解。你的前文和它的理解碰撞出它的下文（所以合适的前文很重要）。越好的 AI
					，其知识储备、理解和推理能力越优秀，预测的下文可以更逼近真实，甚至超过普通人的水平。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					目前生成式 AI 的主要用途有：
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					<text class="cuIcon-title text-blue"></text>
					文章生成、润色、续写：常见于生成文案、文书、标语、名字、营销邮件、笑话、诗词等
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					<text class="cuIcon-title text-blue"></text>
					闲聊：情感咨询、常识问答
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					<text class="cuIcon-title text-blue"></text>
					翻译：各国各民族语言翻译
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					<text class="cuIcon-title text-blue"></text>
					代码注释补充和简单代码生成
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue">关于Token</text>
					</view>
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					在大语言模型中，token 是指自然语言文本中的最小粒度单位，也就是一个最小的单词或符号。通常情况下，自然语言文本是由一个一个的 token 组成的，每个 token 都具备自己的词性、词义等属性。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					在训练大语言模型时，会使用一种称为【词向量】的技术，将每个 token
					表示成一个向量形式，这个向量可以包含很多有用的语义信息，比如单词的词性、上下文等。模型通过这些向量来学习和理解自然语言文本，并能够完成各种任务。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					在大语言模型处理任务的过程中，输入的文本会被转译为 token 输入到模型中，而输出则是从 token 转译到文本。输入 token 与输出 token
					的合计数量直接影响了大语言模型所消耗的算力，所以业界通常采用基于 token 数量的计费模式。也就是一次请求，输入的前文和返回的后文，合计算 token 总数来计费。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					不同的模型在处理文本时分词方法不完全相同，可能存在特定的一句话在不同的模型里面会计算出完全不一样的 token 数量，此外 LLM 服务商在处理输入时可能会加入一些额外 token。如果服务商调整
					tokenizer 算法也可能会导致 token 数计算变化。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					中文、英文、数字、符号，对应的 token 数量也不同。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					最后总结一下：token 是 LLM的术语，AI 认知的语言是经过转换的。对于英语，1 个 token 平均是 4 个字符，大约 0.75 个单词。对于中文，1 个汉字大约是 2 个token。
				</view>
				<view class="padding-xs text-bold" style="text-indent: 2em;">
					在本应用 ToolBox AI 中，为了方便称呼，我们用【能量】这个称呼来代替 token，【能量】就是 token。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					默认情况下，AI 不具备记忆能力。如果想要 AI
					具有理解上下文的能力，办法也非常简单粗暴。那就是在每次提问时将历史问答都加上。因此在连续对话模式下，历史问答消耗的【能量】会累加到本次的输入中，同时历史回答也会作为新回答的输入。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					同时因为不同大语言模型单次请求的 token 最大数是有上限的，通常是 2000 左右（不同厂商有细微差别），因此 ToolBox AI 能设置的最大连续对话次数为 9 次。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					如何在节省【能量】和保持持续对话的记忆之间平衡，是一个挺复杂的事情，且不同厂商和模型都有不同的表现形式。因此本应用只是简单开放了设置【连续对话记忆次数】，具体的平衡把握需要大家自行控制。
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue">注意事项</text>
					</view>
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					国内使用 AI，需注意合规性。监管部门并不拒绝使用 AI 提升生产效率，但对于可能造成社会动员能力、价值观影响等政治问题、以及黄赌毒等违法问题非常敏感。
				</view>
				<view class="padding-xs" style="text-indent: 2em;">
					ToolBox AI 在 uni-ai 的基础上增强了对文本安全内容的检查，请大家放心使用。
				</view>
			</view>
		</view>
	</Page>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
	}
</style>
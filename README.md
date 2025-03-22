[![License: MIT](https://img.shields.io/github/license/microsoft/semantic-kernel)](https://github.com/microsoft/semantic-kernel-typescript/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1063152441819942922?label=Discord&logo=discord&logoColor=white&color=d82679)](https://discord.gg/NbnVpyaeRX)

# Semantic Kernel for TypeScript

Welcome to the Semantic Kernel for TypeScript. For detailed documentation, visit [Microsoft Learn](https://learn.microsoft.com/en-us/semantic-kernel/overview/?tabs=typescript&pivots=programming-language-typescript).

[Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/overview/) is an SDK that integrates Large Language Models (LLMs) like [OpenAI](https://platform.openai.com/docs/introduction), [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service), and [Hugging Face](https://huggingface.co/)
with conventional programming languages like C#, Python, and TypeScript. Semantic Kernel achieves this by allowing you to define [plugins](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/plugins??tabs=typescript&pivots=programming-language-typescript) that can be chained together in just a [few lines of code](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/chaining-functions?tabs=typescript&pivots=programming-language-typescript).

What makes Semantic Kernel _special_, however, is its ability to _automatically_ orchestrate plugins with AI. With Semantic Kernel [planners](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/planner?tabs=typescript&pivots=programming-language-typescript), you can ask an LLM to generate a plan that achieves a user's unique goal. Afterwards, Semantic Kernel will execute the plan for the user.

For C#, Java, Python and other language support, see [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel).

#### Please star the repo to show your support for this project!

![Orchestrating plugins with planner](https://learn.microsoft.com/en-us/semantic-kernel/media/kernel-infographic.png)

## Getting started with Semantic Kernel for TypeScript

The quickest way to get started with the basics is to get an API key from either OpenAI or Azure OpenAI and follow these steps:

1. Clone the repository: `git clone https://github.com/microsoft/semantic-kernel-typescript.git`
2. Install dependencies: `npm install` or `yarn install`
3. Follow the instructions at [Start learning how to use Semantic Kernel](https://learn.microsoft.com/en-us/semantic-kernel/get-started/quick-start-guide?tabs=typescript&pivots=programming-language-typescript).

## Documentation: Learning how to use Semantic Kernel

The fastest way to learn how to use Semantic Kernel is with our walkthroughs
on our Learn site.

1. 📖 [Overview of the kernel](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/?tabs=typescript&pivots=programming-language-typescript)
1. 🔌 [Understanding AI plugins](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/plugins?tabs=typescript&pivots=programming-language-typescript)
1. 👄 [Creating semantic functions](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/semantic-functions?tabs=typescript&pivots=programming-language-typescript)
1. 💽 [Creating native functions](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/native-functions?tabs=typescript&pivots=programming-language-typescript)
1. ⛓️ [Chaining functions together](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/chaining-functions?tabs=typescript&pivots=programming-language-typescript)
1. 🤖 [Auto create plans with planner](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/planner?tabs=typescript&pivots=programming-language-typescript)
1. 💡 [Create and run a ChatGPT plugin](https://learn.microsoft.com/en-us/semantic-kernel/ai-orchestration/chatgpt-plugins?tabs=typescript&pivots=programming-language-typescript)

## Join the community

We welcome your contributions and suggestions to SK community! One of the easiest
ways to participate is to engage in discussions in the GitHub repository.
Bug reports and fixes are welcome!

For new features, components, or extensions, please open an issue and discuss with
us before sending a PR. This is to avoid rejection as we might be taking the core
in a different direction, but also to consider the impact on the larger ecosystem.

To learn more and get started:

- Read the [documentation](https://learn.microsoft.com/en-us/semantic-kernel/overview/?tabs=typescript&pivots=programming-language-typescript)
- Learn how to [contribute](https://learn.microsoft.com/en-us/semantic-kernel/support/contributing?tabs=typescript&pivots=programming-language-typescript) to the project
- Join the [Discord community](https://discord.gg/NbnVpyaeRX)
- Attend [regular office hours and SK community events](COMMUNITY.md)
- Follow the team on our [blog](https://aka.ms/sk/blog)

## Contributor Wall of Fame

[![semantic-kernel contributors](https://contrib.rocks/image?repo=microsoft/semantic-kernel-typescript)](https://github.com/microsoft/semantic-kernel-typescript/graphs/contributors)

## Code of Conduct

This project has adopted the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the
[Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
or contact [opencode@microsoft.com](mailto:opencode@microsoft.com)
with any additional questions or comments.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE) license.
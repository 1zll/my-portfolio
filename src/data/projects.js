/* template
    import ファイル名 from "../assets/ファイル名.png"

    title: "プロジェクト名（シンプルに）",
    slug: "プロジェクトのスラッグ（URL用、英語で）",
    year: 202X,
    image: ファイル名,  // src/assetsに配置
    alt: "画像の説明（アクセシビリティ対策）",
    description: "どんな作品かを一言で説明（50〜60文字）",
    details: `この作品は、〇〇をテーマに制作しました。
                使用技術はHTML/CSS/JavaScript（必要に応じてReactやAPIなども）。
                ポイントは△△で、□□のような演出・構成を意識しています。
                ユーザー体験を重視し、デザインや操作性にこだわりました。
                また、再利用性のある〇〇の記述にも注力しています。`,
    role: ["Code", "Design"],  // 担当内容（複数OK）
    tools: ["HTML", "CSS", "JavaScript"], // 使用技術
    url: "https://～", // 公開URL
    styleguide: null // デザインガイドがあればパス、なければnullでOK
*/
import text_rotates from "../assets/text_rotates.png";
import stopwatch from "../assets/stopwatch.png";
import finland_introduction from "../assets/finland_introduction.png";
import conversion from "../assets/conversion.png";
import todo from "../assets/todo.png";

const projects = [
  {
    title: "文字が回転する",
    slug: "text_rotates",
    year: 2023,
    image: text_rotates,
    alt: "回転する文字アニメーションを表示しているWebページの画像",
    description:
      "CSSアニメーションを活用した、文字が回転する視覚的なエフェクト作品",
    details: `この作品は、HTMLとCSSのみで文字を回転させるアニメーションを実装したものです。
                JavaScriptを使わず、CSSのtransformとanimationプロパティを組み合わせることで、
                軽量かつスムーズなアニメーションを実現しました。
                デザイン面では背景とのコントラストや動きの滑らかさにこだわり、
                シンプルながら目を引くUI演出を意識しました。
                アニメーションの設定は再利用しやすく、他のプロジェクトにも応用可能です。`,
    role: ["Code", "Design"],
    tools: ["HTML", "CSS"],
    url: "https://1zll.github.io/text_rotates",
    styleguide: null,
  },
  {
    title: "ストップウォッチ",
    slug: "stopwatch",
    year: 2023,
    image: stopwatch,
    alt: "ニューモーフィズムデザインのストップウォッチ画面の画像",
    description:
      "ニューモーフィズムデザインを活用したミニマルなストップウォッチ。",
    details: `この作品は、ニューモーフィズムの立体的なUI表現を活かして、
                ストップウォッチをデザイン・実装したものです。
                デザインには neumorphism.io を活用し、ボタンの押し込み感や背景の柔らかい陰影にこだわることで、
                シンプルながらも直感的で触りたくなるUIを意識しました。
                機能はスタート・ストップ・リセットの基本操作に絞り、
                ミニマルな構成で見た目と操作性のバランスを追求しました。`,
    role: ["Code", "Design"],
    tools: ["HTML", "CSS", "JavaScript"],
    url: "https://1zll.github.io/Stopwatch",
    styleguide: null,
  },
  {
    title: "フィンランドの観光サイト",
    slug: "finland_introduction",
    year: 2024,
    image: finland_introduction,
    alt: "フィンランドの自然や観光地を紹介するWebサイトのトップページ画像",
    description: "フィンランドの魅力を紹介する観光紹介Webサイト",
    details: `このサイトは、フィンランドの自然や文化を伝えるために、シンプルで視認性の高いデザインに仕上げました。
                北欧の澄んだ空気感をイメージしてブルー系のカラーを採用し、ユーザビリティを意識した構成にしています。`,
    role: ["Code", "Design"],
    tools: ["HTML", "CSS"],
    url: "https://1zll.github.io/finland_introduction",
    styleguide: null,
  },
  {
    title: "px→remに変換",
    slug: "conversion",
    year: 2024,
    image: conversion,
    alt: "pxをremに変換するシンプルなツール画面の画像",
    description: "pxをremに変換できるシンプルなツールサイト",
    details: `このWebツールは、入力されたpx値をremに変換するシンプルな計算ツールです。
                ユーザーがpxを入力すると、ベースのフォントサイズ（16pxなど）を基準に自動でremに変換され、リアルタイムで結果が表示されます。
                JavaScriptでのDOM操作とイベント処理の練習を兼ねて作成しており、シンプルながら実用的な機能を意識しています。
                UIはミニマルで見やすく、どんなデバイスでも扱いやすい設計にしています。`,
    role: ["Code", "Design"],
    tools: ["HTML", "CSS", "JavaScript"],
    url: "https://1zll.github.io/Conversion",
    styleguide: null,
  },
  {
    title: "TODOリスト",
    slug: "todo",
    year: 2025,
    image: todo,
    alt: "TODOリストの画像",
    description: "タスクを追加・完了・削除できる、シンプルなToDoアプリ",
    details: `この作品は、Material UIとReactを用いて制作したタスク管理アプリです。  
                    MUIを使ってみたいという想いから、練習を兼ねてシンプルなUIで構築しました。  
                    タスクの追加・削除・完了といった基本機能をReactで実装し、  
                    Material UIでスタイリングやコンポーネント構成を整えました。
                    一部の実装ではChatGPTのサポートを活用しつつ、自分で理解・調整しながら仕上げました。`,
    role: ["Code", "Design"],
    tools: ["React", "Material UI", "JavaScript", "HTML", "CSS"],
    url: "https://1zll.github.io/todo/",
    styleguide: null,
  },
  {
    title: "1週間お天気アプリ",
    slug: "weather-forecast-app",
    year: 2025,
    image: weather_api,
    alt: "東京の週間天気を表示するテーブル形式のWebアプリ画面",
    description:
      "Illustratorで自作したアイコンとAPIを連動させ、実用性とデザイン性を両立した週間天気予報アプリ。",
    details: `この作品は、「自作のデザインに技術で命を吹き込む」をテーマに制作しました。
                Illustratorの授業中に「このアイコンを実際のアプリで動かしたい」とひらめいたことがきっかけです。
                使用技術はReact, Tailwind CSS, Open-Meteo API。
                ポイントは、APIの生データを表示用に変換するロジックと、GitHub Pagesの制約（静的ホスティング）を考慮したフロントエンド設計です。
                ユーザー体験を重視し、土日の色分けや詳細がわかるポップオーバーなど、直感的な操作性にこだわりました。
                また、Tailwindのテーマ拡張機能を活用し、再利用性とメンテナンス性の高いCSS設計にも注力しています。`,
    role: ["Code", "Design"],
    tools: ["React", "Tailwind CSS", "JavaScript", "Illustrator"],
    url: "https://1zll.github.io/weather_api/",
    styleguide: null,
  },
];
export default projects;

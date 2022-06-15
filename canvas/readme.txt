/*
 * プログラム名     ： お絵描きシステム
 * プログラム概要	： HTMLのcanvas/JavaScriptを利用した、Web上でお絵描きができるシステム。
 *					   具体的機能一覧については更新履歴を参照のこと。
 *
 *					   ** 以下のサイトを参考にしています。  **
 *					   https://tsuyopon.xyz/2018/09/14/how-to-create-drawing-app-part1/
 *
 *					   ** 以下のJavaScriptプログラムを利用しています。 **
 *					   https://github.com/bebraw/colorjoe
 *
 *					   Copyright (c) 2012 Juho Vepsäläinen Released under the MIT license
 *					   https://github.com/bebraw/colorjoe/blob/master/LICENSE
 *
 * 実行上の注意		：
 * 作成者           ： TABLE-HEADER
 * 更新履歴         ：
 *					   Ver.1.1 (2022/6/15)
 *					   … 以下の機能が実装済み。
 *					    ・アンドゥ/リドゥ機能
 *					    ・複数回のアンドゥ/リドゥ機能
 *					    ・範囲選択/移動機能
 *					    ・塗りつぶし機能（小領域）
 *					    ・直線描画機能
 *
 *					   Ver.1.0 (2022/6/14)
 *					   … 以下の機能が実装済み。
 *					    ・線の描画（えんぴつ）
 *					    ・線の削除（消しゴム）
 *					    ・線の太さの変更
 *					    ・全消し
 *					    ・色の変更（パレット）
 *					    ・色の抽出（スポイト）
 *					    ・キャンバスの出力
 *					    ・背景を透過して出力
 */
﻿
urlSuffix = new String("");
html = new String("");

function ShowLinks(level, kind)
{
  if (level == 1)  urlSuffix = "../";
  if (level == 2)  urlSuffix = "../../";

//タイトルロゴ

//  html = "<A href=\"http://mmpotato.hp.infoseek.co.jp/codes/MH2/index.html\">";
  html = "<A href=\"http://mh2kaiseki.web.fc2.com/index.html\">";
  html += "<IMG src=\"" + urlSuffix + "images/TITLE.gif\" width=\"260\" height=\"64\" border=\"0\">";
  html += "</A>";
  logo.innerHTML = html;

//リンク一覧
  html = "";

  str1 = "";
  str2 = "";
  if (kind != 1) {
    str1 = "<A href=\"" + urlSuffix + "monslist/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += str1 + "モンスターデータ" + str2;

  str1 = "";
  str2 = "";
  if (kind != 14) {
    str1 = "<A href=\"" + urlSuffix + "monslist/monslevel.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "モンスターレベル" + str2;

  str1 = "";
  str2 = "";
//  if (kind != 2) {
    str1 = "<A href=\"" + urlSuffix + "stpickmap/index.html\" target=\"_top\">";
    str2 = "</A>";
//  }
  html += "　　" + str1 + "採取・発掘マップ" + str2;

  str1 = "";
  str2 = "";
  if (kind != 3) {
    str1 = "<A href=\"" + urlSuffix + "evquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "イベントクエスト" + str2;

  str1 = "";
  str2 = "";
  if (kind != 4) {
    str1 = "<A href=\"" + urlSuffix + "onquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "オンラインクエスト" + str2;

  str1 = "";
  str2 = "";
  if (kind != 5) {
    str1 = "<A href=\"" + urlSuffix + "offquest/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "オフラインクエスト" + str2;

  str1 = "";
  str2 = "";
  if (kind != 6) {
    str1 = "<A href=\"" + urlSuffix + "bugu/sword.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "武器一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 7) {
    str1 = "<A href=\"" + urlSuffix + "bugu/head.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "防具一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 11) {
    str1 = "<A href=\"" + urlSuffix + "bugu/soushoku.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "装飾品一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 8) {
    str1 = "<A href=\"" + urlSuffix + "items/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "アイテム一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 9) {
    str1 = "<A href=\"" + urlSuffix + "skill/index.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　" + str1 + "スキル一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 10) {
    str1 = "<A href=\"" + urlSuffix + "mixlist.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "<BR>" + str1 + "調合リスト" + str2;

  str1 = "";
  str2 = "";
  if (kind != 12) {
    str1 = "<A href=\"" + urlSuffix + "jisanlist.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "爺交換リスト" + str2;

  str1 = "";
  str2 = "";
  if (kind != 13) {
    str1 = "<A href=\"" + urlSuffix + "shokuji/ondan.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "食事効果一覧" + str2;

  str1 = "";
  str2 = "";
  if (kind != 15) {
    str1 = "<A href=\"" + urlSuffix + "villagepeople.html\" target=\"_top\">";
    str2 = "</A>";
  }
  html += "　　" + str1 + "村人との交流" + str2;



  str1 = "<A href=\"" + urlSuffix + "index.html\" target=\"_top\">";
  str2 = "</A>";
  html += "　　　　" + str1 + "トップ" + str2;

  links.innerHTML = html;

}

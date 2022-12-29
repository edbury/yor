---
layout: page
title: highlights
permalink: /highlights
---

<h1 class="highlight--feed-title">books i'm reading / passages to remember</h1>

{% assign highlight_items = site.sources | sort: "date" | reverse %}

<ul class="highlight--feed">

  {% for highlight_items in highlight_items %}
    {%- assign highlight-cover = highlight_items.title | url_encode | prepend: "/garden/assets/img/covers/" | replace: "%3A", "+" | append: ".jpg" -%}

    <li class="highlight--feed-item">
      <a href="{{highlight_items.url}}" style="text-decoration: none;">
        <figure class="highlight--cover">
          <img src="{{highlight-cover}}" alt="Cover of {{ highlight_items.title }}">
          <figcaption class="highlight--cover-caption">{{ highlight_items.title }}</figcaption>
        </figure>
      </a>
    </li>

  {%- endfor -%}

</ul>
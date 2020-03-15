---
layout: default
---

<section>

	<ul>
        {% for post in site.posts %}
        <li>
            <span class="code">{{ post.date | date: '%Y/%m/%d' }}</span> - <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        {% endfor %}
    </ul>

</section>

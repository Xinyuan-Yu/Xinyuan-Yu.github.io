<h1 id="On-going Project"></h1>

<h2 style="margin: 30px 0px 10px;">On-going Project</h2>

<ul>
{% for link in site.data.projects.main %}
<li>{{ link.title }}{% if link.notes %} <em>({{ link.notes }})</em>{% endif %}</li>
{% endfor %}
</ul>

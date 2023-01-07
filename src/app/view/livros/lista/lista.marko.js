// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodejsfirst$1.0.0/src/app/view/livros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Document</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Listagem de Livros</h1><table id=\"tb_livros\"><thead><tr><th>Id</th><th>Nome</th><th>Preço</th><th>Editar</th><th>Remover</th></tr> </thead><tbody>");

  var for__17 = 0;

  marko_forEach(data.livros, function(l) {
    var keyscope__18 = "[" + ((for__17++) + "]");

    out.w("<tr id=\"livro_" +
      marko_escapeXmlAttr(l.id) +
      "\"><td>" +
      marko_escapeXml(l.id) +
      "</td><td>" +
      marko_escapeXml(l.titulo) +
      "</td><td>" +
      marko_escapeXml(l.preco) +
      "</td><td><a href=\"/livros/form/" +
      marko_escapeXmlAttr(l.id) +
      "\" data-ref=\"" +
      marko_escapeXmlAttr(l.id) +
      "\" data-type=\"editar\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(l.id) +
      "\" data-type=\"remove\">Remover</a></td></tr>");
  });

  out.w(" </tbody></table> <script src=\"/static/js/remove.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodejsfirst$1.0.0/src/app/view/livros/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };

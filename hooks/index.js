import {
  ArticleIntroBlock,
  ArticlesListBlock,
  Form,
  ImageBlock,
  Slider,
  SubscribeForm,
  TextBlock,
} from "~~/.nuxt/components";

const blocks = [
  {
    type: "article_list_block",
    component: ArticlesListBlock,
    props: "articles",
    class: "articles",
  },
  {
    type: "image_block",
    component: ImageBlock,
    props: "imageBlock",
    class: "image-block",
  },
  {
    type: "text_block",
    component: TextBlock,
    props: "data",
    class: "text-block",
  },
  {
    type: "article_intro_block",
    component: ArticleIntroBlock,
    props: "block",
    class: "intro",
  },
  {
    type: "slider_block",
    component: Slider,
    props: "slides",
    class: "slider",
  },
  {
    type: "subscribe_form_block",
    component: SubscribeForm,
    props: "",
    class: "",
  },
  {
    type: "cta_form_block",
    component: Form,
    props: "",
    class: "",
  },
];
export const pageAnalys = (data, el) => {
  data.body.forEach((element) => {
    blocks.forEach(function (item) {
      if (item.type === element.type) {
        el.value.push({
          type: item.type,
          component: item.component,
          props: item.props,
          value: element.data,
          class: item.class,
        });
      }
    });
  });
  return el;
};

export const addMeta = ({ description, title }) => {
  console.log("description", description, title);
  useHead({
    title: title,
    meta: [{ name: "description", content: description }],
  });
};

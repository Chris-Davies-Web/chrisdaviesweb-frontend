import { mount } from "@vue/test-utils";
import TheHomepage from "@/components/views/TheHomepage";
import TheHeader from "@/components/global/TheHeader";

describe("TheHomepage.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TheHomepage, {
      slots: {
        menu: TheHeader,
      },
    });
  });

  it("renders a menu", () => {
    console.log("wrapper", wrapper);
    expect(wrapper.find(".the-header").exists()).toBe(true);
  });

  it("renders a h1 tag", () => {
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("renders a portfolio image", () => {
    expect(wrapper.find(".hero img").exists()).toBe(true);
  });
});

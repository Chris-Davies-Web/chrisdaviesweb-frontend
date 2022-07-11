import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/global/TheHeader";

describe("TheHeader.vue", () => {
  it("renders menu items", async () => {
    const menu = [
      {
        path: "/",
        label: "Home",
      },
      {
        path: "/blog",
        label: "Blog",
      },
      {
        path: "/projects",
        label: "Projects",
      },
    ];
    const wrapper = shallowMount(TheHeader);

    await wrapper.setData({ menu });

    expect(wrapper.findAll(".the-header__menu-item").length).toBe(3);
  });
});

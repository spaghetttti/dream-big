export const handleScrollToView = (id) => {
  const targetElement = document.getElementById(id);
  targetElement.scrollIntoView({ behavior: "smooth" });
};

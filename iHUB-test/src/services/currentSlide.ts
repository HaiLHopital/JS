//function returns active index for sliders

const gettingCurrentSlide = async (ref: React.MutableRefObject<any>) => {
  const resp = await ref.current.getActiveIndex();
  return resp;
};

export default gettingCurrentSlide;

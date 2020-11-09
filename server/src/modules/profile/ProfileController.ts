import { BasicSectionInput } from './profileTypes';
import { BasicSection } from './sections/BasicSectionEntity';

const updateBasicSection = async (data: BasicSectionInput) => {
  const basicSection = await BasicSection.findOne({
    where: { id: data.id }
  });

  if (!basicSection) {
    throw new Error('Could not find section');
  }

  await BasicSection.save({ ...basicSection, ...data } as BasicSection);

  return true;
};

export default {
  updateBasicSection
};

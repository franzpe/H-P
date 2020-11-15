import { Profile } from './ProfileEntity';

const updateProfile = async (data: any) => {
  /**
   * TODO
   **/
  const profile = await Profile.findOne({
    where: { id: data.id }
  });

  if (!profile) {
    throw new Error('Could not find section');
  }

  await Profile.save({ ...profile, ...data } as Profile);

  return true;
};

export default {
  updateProfile
};

import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${newCabin.image.name}`.replaceAll('/', '');
  console.log(imageName);
  const imagePath = hasImagePath
    ? newCabin.image
    : `https://xikzthoxhewldfxpxfei.supabase.co/storage/v1/object/public/cabins-images/${imageName}`;
  console.log(imagePath);
  //Cabin Created
  // const { data, error } = await supabase
  //   .from('cabins')
  //   .insert([{ ...newCabin, image: imagePath }])
  //   .select();
  let query = supabase.from('cabins');
  //To Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //To Edit Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  const { data, error } = await query.select();
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }
  // Upload image from Blackbox Ai ,Using Reader API
  const reader = new FileReader();
  reader.onload = async () => {
    const imageData = reader.result;
    if(hasImagePath) return data
    // Upload image to Supabase
    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, imageData, {
        cacheControl: '3600',
        upsert: false,
      });
    reader.readAsDataURL(newCabin.image);
    //Image not uploaded and Cabin couldn't created
    if (storageError) {
      await supabase.from('cabins').delete().eq('id', data.id);
      console.error(storageError);
      throw new Error(
        'Cabin image could not be uploaded and cabin is not created'
      );
    }
    return data;
  };
  // ...
}

// const { error: storageError } = await supabase.storage
//   .from('cabin-images')
//   .upload(imageName, newCabin.image, {
//     cacheControl: '3600',
//     upsert: false,
//   });
// Deleting if there is any error while uploading image
//   if (storageError) {
//     await supabase.from('cabins').delete().eq('id', data.id);
//     console.error(storageError);
//     throw new Error(
//       'Cabin image could not be uploaded and cabin is not created'
//     );
//   }
//   return data;
// }

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }

  return data;
}

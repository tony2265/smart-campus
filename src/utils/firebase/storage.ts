import { getStorage, connectStorageEmulator, ref } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { firebaseApp } from ".";
import env from "../../constants/env";
import {
  firebaseEmulatorConfig,
  firebaseStorageUrl,
} from "../../constants/firebase";

const firebaseStorage = getStorage(firebaseApp);

if (env.ENABLE_FIREBASE_EMULATOR) {
  connectStorageEmulator(
    firebaseStorage,
    firebaseEmulatorConfig.STORAGE.HOST,
    firebaseEmulatorConfig.STORAGE.PORT,
  );
}

type imageStorageType = keyof typeof firebaseStorageUrl.images;

export const getImageStorageDirectoryRef = (
  type: imageStorageType,
  id: string,
) => ref(firebaseStorage, `${firebaseStorageUrl.images[type]}/${id}`);

export const generateImageStorageRef = (type: imageStorageType, id: string) =>
  ref(firebaseStorage, `${firebaseStorageUrl.images[type]}/${id}/${uuidv4()}`);

export default firebaseStorage;

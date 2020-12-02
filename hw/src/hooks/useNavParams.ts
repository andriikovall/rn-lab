// Not used now. Was used before redux. Left here for possible
// cases in future

import { useRoute } from '@react-navigation/native';


/**
 * @returns type unsafe route params
 */
const useNavParams = <ParamsType>(): ParamsType => {
  const route = useRoute();
  const params: ParamsType = route.params as unknown as ParamsType;
  return params;
};

export default useNavParams;

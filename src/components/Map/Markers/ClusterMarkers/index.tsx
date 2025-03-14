import React from "react";
import { useSearchParams } from "react-router-dom";

import { useGetClustersQuery } from "../../../../api/cluster";
import { markers } from "../../../../utils/googleMaps";
import { setOnClusterMarkerClick } from "../../../../utils/googleMaps/markers/cluster";
import {
  isCurrentDrawerParams,
  setupDrawerParams,
} from "../../../../utils/routes/params";

const ClusterMarkers: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: clusters } = useGetClustersQuery();
  const isCurrentSearchParamsPoi = isCurrentDrawerParams("poi", searchParams);

  const handleClick = React.useCallback(
    (clusterId: string) =>
      setupDrawerParams<"cluster">(
        { clusterId },
        searchParams,
        setSearchParams,
      ),
    [searchParams, setSearchParams],
  );

  React.useEffect(() => {
    if (!isCurrentSearchParamsPoi && clusters) {
      markers.cluster.setClusters(clusters);
      setOnClusterMarkerClick(handleClick);
    }

    return () => {
      markers.cluster.clear();
    };
  }, [clusters, handleClick, isCurrentSearchParamsPoi]);
  return <></>;
};

export default ClusterMarkers;

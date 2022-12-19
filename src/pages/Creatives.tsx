import React, { FC, useState } from "react";
import { List, Paper } from "@mui/material";
import { Pagination } from "molecules/Pagination";
import { Creative } from "utils/types";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useQuery } from "react-query";
import { getCreatives } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";
import CreativeList from "organisms/CreativeList";

const Creatives: FC = () => {
  const [pages, setPages] = useState<number>(1);

  const { isLoading, isError, data: creatives } = useQuery(["creatives", pages], () => getCreatives(pages, 5));

  if (isLoading) {
    return <DisplayHandling isLoading />;
  } else if (isError) {
    return <DisplayHandling isError />;
  }

  return (
    <CreativeWrapper
      main={
        <Paper style={{ padding: 16 }} elevation={8}>
          <List>
            {creatives.map((creative: Creative, index: number) => (
              <CreativeList key={index} creatives={creatives} creative={creative} index={index} pages={pages} />
            ))}
          </List>
        </Paper>
      }
      footer={<Pagination pages={pages} onChange={(event, page: number) => setPages(page)} />}
    />
  );
};

export default Creatives;

import React, { FC, useEffect, useState } from "react";
import { List, Paper } from "@mui/material";
import { Pagination } from "molecules/Pagination";
import { Creative } from "utils/types";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useQuery } from "react-query";
import { getCreatives } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";
import CreativeList from "organisms/CreativeList";
import CreativeDetail from "organisms/CreativeDetail";

const CreativesMain: FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [idFocused, setIdFocused] = useState<string>("");

  const { isLoading, isError, data: creatives } = useQuery(["creatives", pages], () => getCreatives(pages, 5));

  useEffect(() => {
    setIdFocused("");
  }, [pages]);

  if (isLoading) {
    return <DisplayHandling isLoading />;
  } else if (isError) {
    return <DisplayHandling isError />;
  }

  return (
    <div data-testid="creatives-id">
      <CreativeWrapper
        main={
          <Paper style={{ padding: 16 }} elevation={8}>
            <List>
              {creatives.map((creative: Creative, index: number) => (
                <CreativeList
                  key={index}
                  creatives={creatives}
                  creative={creative}
                  index={index}
                  idFocused={idFocused}
                  setIdFocused={setIdFocused}
                />
              ))}
            </List>
          </Paper>
        }
        footer={<Pagination count={10} pages={pages} onChange={(event, page: number) => setPages(page)} />}
      />
      {idFocused && <CreativeDetail idFocused={idFocused} />}
    </div>
  );
};

export default CreativesMain;

// @ts-nocheck
import * as __fd_glob_6 from "../content/docs/components/profile-card.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/pop-card.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/filter.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/badge.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/introduction.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/Installation.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/_meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"_meta.json": __fd_glob_0, }, {"Installation.mdx": __fd_glob_1, "introduction.mdx": __fd_glob_2, "components/badge.mdx": __fd_glob_3, "components/filter.mdx": __fd_glob_4, "components/pop-card.mdx": __fd_glob_5, "components/profile-card.mdx": __fd_glob_6, });
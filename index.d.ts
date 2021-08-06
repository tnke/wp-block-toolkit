import React from "react";

type BlockNames = string[];

/**
 * Components
 */
export const InlineNotice: React.FC<{
	level: "warning" | "error";
}> = props;

export const PostControl: React.FC<{
	label: string;
	posts: any[];
	value: string | number;
	onChange: (...args: any[]) => any;
	postValueKey: string;
}> = props;

export const RequireBlocks: React.FC<{
	blocks: BlockNames;
}> = props;

export const TaxonomyControl: React.FC<{
	label: string;
	taxonomies: any[];
	value: any[];
	onChange: (...args: any[]) => any;
}> = props;

/**
 * Hooks
 */

export function useAllPosts(postType: string): any[];

export function useRequiredBlocks(
	requiredBlocks: BlockNames
): {
	missingBlocks: BlockNames;
	hasRequiredBlocks: boolean;
};

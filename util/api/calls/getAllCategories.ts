import { Category } from 'cms/Category'
import { getClient } from '..'
import allCategories from '../queries/allCategories'

/**
 *
 */
async function getAllCategories(): Promise<Category[]> {
  const data: Category[] = await getClient(false).fetch(allCategories)

  return data
}

export default getAllCategories

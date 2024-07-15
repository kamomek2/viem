import { expect, test } from 'vitest'

import { forkUrl } from '../../_test/constants.js'
import { testClient } from '../../_test/utils.js'

import { setRpcUrl } from './setRpcUrl.js'

test('sets the rpc url', async () => {
  await expect(setRpcUrl(testClient, forkUrl)).resolves.toBeUndefined()
})

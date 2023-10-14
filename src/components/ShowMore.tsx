'use client'

import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import { CustomButton } from '@/components'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const route = useRouter()

    const handleNavigation = () => {
        const newPageNumber = (pageNumber + 1) * 10
        const newPathName = updateSearchParams('limit', `${newPageNumber}`)
        route.push(newPathName)
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
            <CustomButton 
                btnType="button"
                title="Show More"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
            />)}
        </div>
    )
}

export default ShowMore
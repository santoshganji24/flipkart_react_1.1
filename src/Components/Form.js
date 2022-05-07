import React from 'react'

export default function Form() {
    return (
        <form>
            <div className="search">
                <input
                    className="searchinput"
                    type="text"
                    placeholder="search for Phone brand"
                />
            </div>
            <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>

        </form>
    )
}
